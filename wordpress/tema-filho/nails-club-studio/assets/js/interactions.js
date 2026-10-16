(() => {
    let controller;
    let addedExampleCount = 0;

    function createElement(tagName, text) {
        const element = document.createElement(tagName);
        if (text) element.textContent = text;
        return element;
    }

    function createFavoriteButton(eventId, title) {
        const button = createElement("button", "Favoritar");
        button.type = "button";
        button.className = "favorite-button js-only";
        button.dataset.agendaAction = "favorite";
        button.dataset.eventId = eventId;
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", `Favoritar: ${title}`);
        return button;
    }

    function initialize() {
        if (controller && !controller.signal.aborted) return;

        const root = document.querySelector(".nails-club-home");
        if (!root) return;

        controller = new AbortController();
        const { signal } = controller;
        const navigation = root.querySelector("#primary-navigation");
        const navigationToggle = root.querySelector(".navbar-toggler");
        const mobileNavigation = window.matchMedia("(max-width: 61.999rem)");

        root.classList.add("js-ready");
        root.querySelector("#conteudo")?.setAttribute("tabindex", "-1");

        if (navigation && navigationToggle) {
            const setNavigation = (isOpen) => {
                navigation.classList.toggle("is-open", isOpen);
                navigationToggle.setAttribute("aria-expanded", String(isOpen));
            };

            setNavigation(!mobileNavigation.matches);
            mobileNavigation.addEventListener("change", (event) => {
                setNavigation(!event.matches);
            }, { signal });
            navigationToggle.addEventListener("click", () => {
                setNavigation(navigationToggle.getAttribute("aria-expanded") !== "true");
            }, { signal });

            navigation.addEventListener("click", (event) => {
                const link = event.target.closest("a[href^='#']");
                if (!link || !mobileNavigation.matches) return;

                setNavigation(false);
                const target = root.querySelector(link.hash);
                if (target) {
                    target.tabIndex = -1;
                    target.focus({ preventScroll: true });
                }
            }, { signal });
        }

        const track = root.querySelector(".nails-club-home__gallery");
        if (track) {
            const slides = [...track.querySelectorAll("figure")];
            let currentIndex = 0;
            let pointerStart;

            const showSlide = (index) => {
                currentIndex = Math.max(0, Math.min(index, slides.length - 1));
                const slide = slides[currentIndex];
                const trackRect = track.getBoundingClientRect();
                const slideRect = slide.getBoundingClientRect();
                const left = track.scrollLeft + slideRect.left - trackRect.left;
                const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";

                track.scrollTo({ left, behavior });
                slides.forEach((item, itemIndex) => {
                    item.setAttribute("aria-roledescription", "slide");
                    item.setAttribute("aria-label", `${itemIndex + 1} de ${slides.length}${itemIndex === currentIndex ? ", atual" : ""}`);
                });
            };

            track.addEventListener("pointerdown", (event) => {
                if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
                pointerStart = { id: event.pointerId, x: event.clientX };
            }, { signal });

            track.addEventListener("pointerup", (event) => {
                if (!pointerStart || pointerStart.id !== event.pointerId) return;
                const distance = pointerStart.x - event.clientX;
                pointerStart = undefined;
                if (Math.abs(distance) >= 48) showSlide(currentIndex + Math.sign(distance));
            }, { signal });

            const cancelPointer = () => { pointerStart = undefined; };
            track.addEventListener("pointercancel", cancelPointer, { signal });
            track.addEventListener("lostpointercapture", cancelPointer, { signal });
            track.addEventListener("dragstart", (event) => event.preventDefault(), { signal });
        }

        const agendaList = root.querySelector("[data-agenda-list]");
        const agendaTableBody = root.querySelector(".agenda-table tbody");
        const filter = root.querySelector("#agenda-filter");
        const agendaStatus = root.querySelector("#agenda-status");
        const addExampleButton = root.querySelector("#add-agenda-example");

        if (agendaList && agendaTableBody && filter && agendaStatus && addExampleButton) {
            const titleOf = (item) => item.querySelector("h3, th[scope='row']")?.textContent.trim() ?? "";

            for (const item of agendaList.querySelectorAll(":scope > li[data-event-id]")) {
                item.querySelector("article").append(createFavoriteButton(item.dataset.eventId, titleOf(item)));
            }
            for (const row of agendaTableBody.querySelectorAll(":scope > tr[data-event-id]")) {
                row.querySelector("[data-favorite-cell]").append(createFavoriteButton(row.dataset.eventId, titleOf(row)));
            }

            const updateFilter = () => {
                const query = filter.value.trim().toLocaleLowerCase("pt-BR");
                let visibleCount = 0;
                for (const item of agendaList.querySelectorAll(":scope > li")) {
                    const matches = titleOf(item).toLocaleLowerCase("pt-BR").includes(query);
                    item.hidden = !matches;
                    visibleCount += Number(matches);
                }
                for (const row of agendaTableBody.querySelectorAll(":scope > tr")) {
                    row.hidden = !titleOf(row).toLocaleLowerCase("pt-BR").includes(query);
                }
                agendaStatus.textContent = query
                    ? `${visibleCount} ${visibleCount === 1 ? "noite encontrada" : "noites encontradas"}.`
                    : `${visibleCount} noites demonstrativas.`;
            };

            root.addEventListener("click", (event) => {
                const button = event.target.closest('[data-agenda-action="favorite"]');
                if (!button) return;

                const isFavorite = button.getAttribute("aria-pressed") !== "true";
                const eventId = button.dataset.eventId;
                let title = "";
                for (const item of root.querySelectorAll("[data-event-id]")) {
                    if (item.dataset.eventId !== eventId) continue;
                    title = titleOf(item);
                    for (const matchingButton of item.querySelectorAll('[data-agenda-action="favorite"]')) {
                        matchingButton.setAttribute("aria-pressed", String(isFavorite));
                        matchingButton.textContent = isFavorite ? "Favorito" : "Favoritar";
                        matchingButton.setAttribute("aria-label", `${isFavorite ? "Remover dos favoritos" : "Favoritar"}: ${title}`);
                    }
                }
                agendaStatus.textContent = isFavorite
                    ? `${title} adicionada aos favoritos neste navegador.`
                    : `${title} removida dos favoritos.`;
            }, { signal });

            filter.addEventListener("input", updateFilter, { signal });
            addExampleButton.addEventListener("click", () => {
                addedExampleCount += 1;
                const eventId = `example-${addedExampleCount}`;
                const title = `Noite demonstrativa ${addedExampleCount}`;
                const item = createElement("li");
                const article = createElement("article");
                const heading = createElement("h3", title);
                const details = createElement("dl");
                item.dataset.eventId = eventId;
                for (const [term, description] of [["Proposta musical", "Seleção alternativa"], ["Atividade", "Noite demonstrativa"]]) {
                    const pair = createElement("div");
                    pair.append(createElement("dt", term), createElement("dd", description));
                    details.append(pair);
                }
                article.append(heading, details, createFavoriteButton(eventId, title));
                item.append(article);
                agendaList.append(item);

                const row = createElement("tr");
                const name = createElement("th", title);
                const music = createElement("td", "Seleção alternativa");
                const activity = createElement("td", "Noite demonstrativa");
                const favorites = createElement("td");
                name.scope = "row";
                favorites.className = "js-only";
                favorites.dataset.favoriteCell = "";
                favorites.append(createFavoriteButton(eventId, title));
                row.dataset.eventId = eventId;
                row.append(name, music, activity, favorites);
                agendaTableBody.append(row);
                updateFilter();
                agendaStatus.textContent = `${title} adicionada à lista demonstrativa.`;
            }, { signal });
            updateFilter();
        }

        const dialog = root.querySelector("#agenda-details");
        const dialogOpen = root.querySelector("[data-agenda-open]");
        const dialogClose = root.querySelector("[data-agenda-close]");
        if (dialog && dialogOpen && dialogClose) {
            dialogOpen.addEventListener("click", () => dialog.showModal(), { signal });
            dialogClose.addEventListener("click", () => dialog.close(), { signal });
            dialog.addEventListener("click", (event) => {
                if (event.target === dialog) dialog.close();
            }, { signal });
        }

        const form = root.querySelector("#contact-form");
        const contactStatus = root.querySelector("#contact-status");
        if (form && contactStatus) {
            form.querySelector("fieldset").disabled = false;
            form.addEventListener("invalid", () => {
                contactStatus.textContent = "Revise os campos obrigatórios antes de continuar.";
            }, { capture: true, signal });
            form.addEventListener("input", () => { contactStatus.textContent = ""; }, { signal });
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                contactStatus.textContent = "Campos validados neste navegador. A mensagem não foi enviada nem armazenada.";
                form.reset();
            }, { signal });
        }
    }

    window.addEventListener("pageshow", initialize);
    window.addEventListener("pagehide", () => {
        controller?.abort();
        document.querySelector(".nails-club-home")?.classList.remove("js-ready");
    });
})();