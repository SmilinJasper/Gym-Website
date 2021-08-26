const navBarHeader = document.querySelector(".nav-bar-header");


let lastScrollTopPosition = 0;

window.addEventListener("scroll", () => {
    let scrollTopPosition = window.pageYOffset || document.documentElement.scrollTopPosition;

    if (scrollTopPosition < lastScrollTopPosition || !scrollTopPosition) {
        if (navBarHeader.classList.contains("header--scrolled-down")) return navBarHeader.classList.remove("header--scrolled-down");
    } else {
        if (!navBarHeader.classList.contains("header--scrolled-down")) return navBarHeader.classList.add("header--scrolled-down");
    }

    lastScrollTopPosition = scrollTopPosition == 0 ? 0 : scrollTopPosition;
});