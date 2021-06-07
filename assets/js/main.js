const navBarHeader = document.querySelector(".nav-bar-header");
console.log(navBarHeader);

const webPage = document.body;

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

/* webPage.addEventListener("wheel", (event) => {
    console.log("scrolled");

    if (wheelDirectionIsUp(event)) {
        if (!navBarHeader.classList.contains("header--scrolled-down")) navBarHeader.classList.add("header--scrolled-down");
    }
    if (navBarHeader.classList.contains("header--scrolled-down")) navBarHeader.classList.remove("header--scrolled-down");
})

function wheelDirectionIsUp(event) {
    console.log(event.wheelDelta);
    if (event.wheelDelta && event.wheelDelta > 0) return true;
    return false;
} */