const { test, expect } = require("@playwright/test");

async function openHome(page, viewport) {
    if (viewport) {
        await page.setViewportSize(viewport);
    }
    await page.goto("/");
}

test("menu móvel é operável por teclado e leva à agenda", async ({ page }) => {
    await openHome(page, { width: 390, height: 844 });

    const toggle = page.getByRole("button", { name: "Abrir ou recolher navegação" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    const agendaLink = page
        .getByRole("navigation", { name: "Navegação principal" })
        .getByRole("link", { name: "Agenda" });
    await agendaLink.focus();
    await page.keyboard.press("Enter");

    await expect(page).toHaveURL(/#agenda$/);
    await expect(page.locator("#agenda")).toBeFocused();
});

test("agenda filtra, favorita e adiciona um exemplo local", async ({ page }) => {
    await openHome(page, { width: 390, height: 844 });

    const agenda = page.getByRole("region", { name: "Agenda demonstrativa" });
    const filter = page.getByRole("searchbox", { name: "Filtrar noites da agenda" });
    const status = page.getByRole("status", { name: "3 noites demonstrativas." });

    await filter.fill("darkwave");
    await expect(agenda.getByRole("listitem").filter({ hasText: "Noite Darkwave" })).toBeVisible();
    await expect(agenda.getByRole("listitem").filter({ hasText: "Ruído Industrial" })).toBeHidden();
    await expect(page.locator("#agenda-status")).toHaveText("1 noite encontrada.");

    await filter.clear();
    await page.getByRole("button", { name: "Favoritar: Noite Darkwave" }).click();
    await expect(page.getByRole("button", { name: "Remover dos favoritos: Noite Darkwave" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#agenda-status")).toHaveText("Noite Darkwave adicionada aos favoritos neste navegador.");

    await page.getByRole("button", { name: "Adicionar exemplo local" }).click();
    await expect(agenda.getByRole("listitem").filter({ hasText: "Noite demonstrativa 1" })).toBeVisible();
});

test("galeria mantém controles acessíveis e aceita gesto de ponteiro", async ({ page }) => {
    await openHome(page, { width: 390, height: 844 });

    const track = page.getByRole("group", { name: "Galeria de imagens do clube" });
    await page.getByRole("button", { name: "Próxima imagem" }).click();
    await expect(page.locator("#gallery-status")).toHaveText("Imagem 2 de 3: A pista vista de cima");

    await track.scrollIntoViewIfNeeded();
    const currentSlide = await track.locator("figure").nth(1).boundingBox();
    await page.mouse.move(currentSlide.x + currentSlide.width * 0.8, currentSlide.y + currentSlide.height / 2);
    await page.mouse.down();
    await page.mouse.move(currentSlide.x + currentSlide.width * 0.2, currentSlide.y + currentSlide.height / 2, { steps: 5 });
    await page.mouse.up();
    await expect(page.locator("#gallery-status")).toHaveText("Imagem 3 de 3: Bar e convivência");
});

test("diálogo da agenda fecha com Escape e devolve o foco", async ({ page }) => {
    await page.goto("/");

    const trigger = page.getByRole("button", { name: "Como funciona esta agenda?" });
    const dialogElement = page.locator("#agenda-details");
    const shown = dialogElement.evaluate((element) => new Promise((resolve) => {
        element.addEventListener("shown.bs.modal", resolve, { once: true });
    }));
    await trigger.click();
    await shown;
    const dialog = page.getByRole("dialog", { name: "Sobre a agenda" });
    await expect(dialog).toBeVisible();

    const hidden = dialog.evaluate((element) => new Promise((resolve) => {
        element.addEventListener("hidden.bs.modal", resolve, { once: true });
    }));
    await page.keyboard.press("Escape");
    await hidden;
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
});

test("formulário valida localmente e não envia dados", async ({ page }) => {
    const postRequests = [];
    page.on("request", (request) => {
        if (request.method() === "POST") postRequests.push(request.url());
    });

    await page.goto("/");

    await page.getByRole("button", { name: "Enviar mensagem" }).click();
    await expect(page.locator("#contact-status")).toHaveText("Revise os campos obrigatórios antes de continuar.");

    await page.getByLabel("Nome").fill("Pessoa de teste");
    await page.getByLabel("E-mail").fill("teste@example.test");
    await page.getByLabel("Mensagem").fill("Mensagem de validação local.");
    await page.getByRole("button", { name: "Enviar mensagem" }).click();

    await expect(page.locator("#contact-status")).toHaveText("Campos validados neste navegador. A mensagem não foi enviada nem armazenada.");
    await expect(page.getByLabel("Nome")).toHaveValue("");
    expect(postRequests).toEqual([]);
});

test("layout não transborda e alterna agenda e galeria nos breakpoints", async ({ page }) => {
    for (const width of [320, 671, 672, 991, 992]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto("/");

        const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
        expect(hasHorizontalOverflow, `overflow horizontal em ${width}px`).toBe(false);

        if (width < 672) {
            await expect(page.locator(".agenda-cards")).toBeVisible();
            await expect(page.locator(".agenda-table")).toBeHidden();
        } else {
            await expect(page.locator(".agenda-cards")).toBeHidden();
            await expect(page.locator(".agenda-table")).toBeVisible();
        }
    }
});

test("movimento reduzido remove scroll suave, transições e escala no hover", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const submit = page.getByRole("button", { name: "Enviar mensagem" });
    await submit.hover();

    const styles = await page.evaluate(() => ({
        scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
        transitionDuration: getComputedStyle(document.querySelector("#contact-form button")).transitionDuration,
        transform: getComputedStyle(document.querySelector("#contact-form button")).transform,
    }));

    expect(styles.scrollBehavior).toBe("auto");
    expect(styles.transitionDuration).toBe("0s");
    expect(styles.transform).toBe("none");
});

test("links internos, imagens e recursos locais carregam sem erros", async ({ page }) => {
    const failedLocalResponses = [];
    const pageErrors = [];
    page.on("response", (response) => {
        if (new URL(response.url()).hostname === "127.0.0.1" && response.status() >= 400) {
            failedLocalResponses.push(`${response.status()} ${response.url()}`);
        }
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto("/");
    expect(response.status()).toBe(200);

    const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((links) => links
        .filter((link) => {
            const targetId = decodeURIComponent(link.hash.slice(1));
            return targetId && !document.getElementById(targetId);
        })
        .map((link) => link.getAttribute("href")));
    expect(brokenAnchors).toEqual([]);

    const images = page.locator("img");
    await images.evaluateAll((items) => Promise.all(items.map((image) => {
        image.loading = "eager";
        return image.decode();
    })));
    const imageWidths = await images.evaluateAll((items) => items.map((image) => image.naturalWidth));
    expect(imageWidths.length).toBeGreaterThan(0);
    expect(imageWidths.every((width) => width > 0)).toBe(true);
    expect(failedLocalResponses).toEqual([]);
    expect(pageErrors).toEqual([]);
});