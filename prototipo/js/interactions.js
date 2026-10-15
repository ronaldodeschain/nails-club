let interactionController;
let addedExampleCount = 0;

function createElement(tagName, text) {
    const element = document.createElement(tagName);

    if (text) {
        element.textContent = text;
    }

    return element;
}

function createFavoriteButton(eventId, title) {
    const button = createElement("button", "Favoritar");
    button.type = "button";
    button.className = "btn btn-sm btn-outline-info favorite-button";
    button.dataset.agendaAction = "favorite";
    button.dataset.eventId = eventId;
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `Favoritar: ${title}`);

    return button;
}

function addFavoriteControls(agendaList, agendaTableBody) {
    for (const item of agendaList.querySelectorAll(":scope > li[data-event-id]")) {
        const title = item.querySelector("h3").textContent.trim();

        if (!item.querySelector('[data-agenda-action="favorite"]')) {
            item.querySelector("article").append(createFavoriteButton(item.dataset.eventId, title));
        }
    }

    for (const row of agendaTableBody.querySelectorAll(":scope > tr[data-event-id]")) {
        const title = row.querySelector('th[scope="row"]').textContent.trim();

        if (!row.querySelector('[data-agenda-action="favorite"]')) {
            row.querySelector("[data-favorite-cell]").append(createFavoriteButton(row.dataset.eventId, title));
        }
    }
}

function createAgendaExample(eventId, title) {
    const item = createElement("li");
    const article = createElement("article");
    const heading = createElement("h3", title);
    const details = createElement("dl");

    item.dataset.eventId = eventId;
    for (const [termText, descriptionText] of [
        ["Proposta musical", "Seleção alternativa"],
        ["Atividade", "Noite demonstrativa"],
    ]) {
        const pair = createElement("div");
        pair.append(createElement("dt", termText), createElement("dd", descriptionText));
        details.append(pair);
    }

    article.append(heading, details, createFavoriteButton(eventId, title));
    item.append(article);

    return item;
}

function createAgendaTableExample(eventId, title) {
    const row = createElement("tr");
    const name = createElement("th", title);
    const music = createElement("td", "Seleção alternativa");
    const activity = createElement("td", "Noite demonstrativa");
    const favorites = createElement("td");

    row.dataset.eventId = eventId;
    name.scope = "row";
    favorites.className = "js-only";
    favorites.dataset.favoriteCell = "";
    favorites.append(createFavoriteButton(eventId, title));
    row.append(name, music, activity, favorites);

    return row;
}

function initializeAgenda(controller) {
    const section = document.querySelector("#agenda");
    const agendaList = section?.querySelector("[data-agenda-list]");
    const agendaTableBody = section?.querySelector(".agenda-table tbody");
    const filter = section?.querySelector("#agenda-filter");
    const status = section?.querySelector("#agenda-status");
    const addExampleButton = section?.querySelector("#add-agenda-example");

    if (!section || !agendaList || !agendaTableBody || !filter || !status || !addExampleButton) {
        return;
    }

    const getTitle = (item, isTableRow) => {
        const title = isTableRow ? item.querySelector('th[scope="row"]') : item.querySelector("h3");

        return title?.textContent.trim() ?? "";
    };

    const updateFilter = () => {
        const query = filter.value.trim().toLocaleLowerCase("pt-BR");
        let visibleCount = 0;

        for (const item of agendaList.querySelectorAll(":scope > li")) {
            const matches = getTitle(item, false).toLocaleLowerCase("pt-BR").includes(query);
            item.hidden = !matches;
            visibleCount += Number(matches);
        }

        for (const row of agendaTableBody.querySelectorAll(":scope > tr")) {
            row.hidden = !getTitle(row, true).toLocaleLowerCase("pt-BR").includes(query);
        }

        status.textContent = query
            ? `${visibleCount} ${visibleCount === 1 ? "noite encontrada" : "noites encontradas"}.`
            : `${visibleCount} noites demonstrativas.`;
    };

    const toggleFavorite = (event) => {
        const button = event.target.closest('[data-agenda-action="favorite"]');

        if (!button || !section.contains(button)) {
            return false;
        }

        const isFavorite = button.getAttribute("aria-pressed") !== "true";
        const eventId = button.dataset.eventId;
        const matchingItems = section.querySelectorAll("[data-agenda-list] > li[data-event-id], .agenda-table tbody > tr[data-event-id]");
        let title = "";

        for (const item of matchingItems) {
            if (item.dataset.eventId !== eventId) {
                continue;
            }

            title = getTitle(item, item.tagName === "TR");
            const matchingButton = item.querySelector('[data-agenda-action="favorite"]');

            if (matchingButton) {
                matchingButton.setAttribute("aria-pressed", String(isFavorite));
                matchingButton.textContent = isFavorite ? "Favorito" : "Favoritar";
                matchingButton.setAttribute("aria-label", `${isFavorite ? "Remover dos favoritos" : "Favoritar"}: ${title}`);
            }
        }

        status.textContent = isFavorite
            ? `${title} adicionada aos favoritos neste navegador.`
            : `${title} removida dos favoritos.`;

        return true;
    };

    addFavoriteControls(agendaList, agendaTableBody);
    updateFilter();

    agendaList.addEventListener("click", toggleFavorite, { signal: controller.signal });
    agendaTableBody.addEventListener("click", toggleFavorite, { signal: controller.signal });
    filter.addEventListener("input", updateFilter, { signal: controller.signal });
    addExampleButton.addEventListener("click", () => {
        addedExampleCount += 1;
        const eventId = `example-${addedExampleCount}`;
        const title = `Noite demonstrativa ${addedExampleCount}`;

        agendaList.append(createAgendaExample(eventId, title));
        agendaTableBody.append(createAgendaTableExample(eventId, title));
        updateFilter();
        status.textContent = `${title} adicionada à lista demonstrativa.`;
    }, { signal: controller.signal });
}

function initializeGallery(controller) {
    const track = document.querySelector("[data-gallery-track]");
    const controls = document.querySelector(".gallery-controls");
    const status = document.querySelector("#gallery-status");

    if (!track || !controls || !status) {
        return;
    }

    const slides = [...track.querySelectorAll("figure")];
    let currentIndex = 0;
    let pointerStart = null;

    const showSlide = (index) => {
        currentIndex = Math.max(0, Math.min(index, slides.length - 1));
        const slide = slides[currentIndex];
        const caption = slide.querySelector("figcaption")?.textContent.trim() ?? "";
        const trackRect = track.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();
        const left = track.scrollLeft + slideRect.left - trackRect.left;
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";

        track.scrollTo({ left, behavior });
        status.textContent = `Imagem ${currentIndex + 1} de ${slides.length}: ${caption}`;
        slides.forEach((item, itemIndex) => {
            item.setAttribute("aria-label", `${itemIndex + 1} de ${slides.length}${itemIndex === currentIndex ? ", atual" : ""}`);
        });
    };

    controls.addEventListener("click", (event) => {
        const button = event.target.closest("[data-gallery-step]");

        if (button && controls.contains(button)) {
            showSlide(currentIndex + Number(button.dataset.galleryStep));
        }
    }, { signal: controller.signal });

    track.addEventListener("pointerdown", (event) => {
        if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) {
            return;
        }

        pointerStart = { id: event.pointerId, x: event.clientX };

        try {
            track.setPointerCapture(event.pointerId);
        } catch {
            pointerStart = null;
        }
    }, { signal: controller.signal });

    track.addEventListener("pointerup", (event) => {
        if (!pointerStart || pointerStart.id !== event.pointerId) {
            return;
        }

        const distance = pointerStart.x - event.clientX;
        pointerStart = null;

        if (Math.abs(distance) >= 48) {
            showSlide(currentIndex + Math.sign(distance));
        }
    }, { signal: controller.signal });

    const cancelPointer = (event) => {
        if (!pointerStart || (event.pointerId !== undefined && pointerStart.id !== event.pointerId)) {
            return;
        }

        pointerStart = null;
    };

    track.addEventListener("pointercancel", cancelPointer, { signal: controller.signal });
    track.addEventListener("lostpointercapture", cancelPointer, { signal: controller.signal });
    track.addEventListener("dragstart", (event) => event.preventDefault(), { signal: controller.signal });
}

function initializeContactForm(controller) {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#contact-status");

    if (!form || !status) {
        return;
    }

    form.addEventListener("invalid", () => {
        status.textContent = "Revise os campos obrigatórios antes de continuar.";
    }, { capture: true, signal: controller.signal });

    $(form).on("input.t08", "input, textarea", () => {
        status.textContent = "";
    });
    controller.signal.addEventListener("abort", () => $(form).off(".t08"), { once: true });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "Campos validados neste navegador. A mensagem não foi enviada nem armazenada.";
        form.reset();
    }, { signal: controller.signal });
}

function initializeInteractions() {
    if (interactionController && !interactionController.signal.aborted) {
        return;
    }

    interactionController = new AbortController();
    initializeAgenda(interactionController);
    initializeGallery(interactionController);
    initializeContactForm(interactionController);
}

window.addEventListener("pagehide", () => interactionController?.abort());
window.addEventListener("pageshow", initializeInteractions);
initializeInteractions();