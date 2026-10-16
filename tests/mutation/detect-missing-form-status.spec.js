const { test, expect } = require("@playwright/test");

test("a validação detecta quando o status de envio é removido", async ({ page }) => {
    test.setTimeout(10_000);

    await page.route("**/js/interactions.js", async (route) => {
        const response = await route.fetch();
        const source = await response.text();
        const successMessage = 'status.textContent = "Campos validados neste navegador. A mensagem não foi enviada nem armazenada.";';
        expect(source).toContain(successMessage);
        const mutatedSource = source.replace(
            successMessage,
            ""
        );

        expect(mutatedSource).not.toBe(source);
        await route.fulfill({ response, body: mutatedSource });
    });

    await page.goto("/");
    await page.getByLabel("Nome").fill("Pessoa de teste");
    await page.getByLabel("E-mail").fill("teste@example.test");
    await page.getByLabel("Mensagem").fill("Mensagem de validação local.");
    await page.getByRole("button", { name: "Enviar mensagem" }).click();

    let assertionDetectedMutation = false;
    try {
        await expect(page.locator("#contact-status")).toHaveText(
            "Campos validados neste navegador. A mensagem não foi enviada nem armazenada.",
            { timeout: 1_500 }
        );
    } catch (error) {
        assertionDetectedMutation = error.message.includes("toHaveText");
    }

    expect(assertionDetectedMutation, "a assertion de sucesso deve falhar sob a mutação").toBe(true);
});