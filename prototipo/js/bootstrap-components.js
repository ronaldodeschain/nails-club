const navigation = document.querySelector("#primary-navigation");
const navigationToggle = document.querySelector('[data-bs-target="#primary-navigation"]');

if (navigation && navigationToggle && window.bootstrap?.Collapse) {
    const navigationCollapse = window.bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false });

    navigation.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");

        if (!link || !navigation.contains(link) || !window.matchMedia("(max-width: 991.98px)").matches) {
            return;
        }

        navigationCollapse.hide();

        if (link.hash) {
            document.querySelector(link.hash)?.focus({ preventScroll: true });
        }
    });
}