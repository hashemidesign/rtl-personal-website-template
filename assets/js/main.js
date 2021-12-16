let topHeader = document.getElementById("top-navigation");
let scrollToTopButton = document.getElementById("scroll-to-top");
let sticky = topHeader.offsetTop + 400;
window.onscroll = () => {
    if (window.pageYOffset > sticky) {
        topHeader.classList.add("sticky-header");
    } else {
        topHeader.classList.remove("sticky-header");
    }

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = () => {
    let body = document.getElementsByTagName("body")[0];

    document.getElementById("burger-menu").addEventListener("click", () => {
        body.style.overflowY = "hidden";
        body.style.height = "100vh";
        let mobileMenu = document.getElementsByClassName("mobile-menu")[0];
        mobileMenu.style.left = 0;
    });

    document.getElementById("close-menu").addEventListener("click", () => {
        body.style.height = "auto";
        let mobileMenu = document.getElementsByClassName("mobile-menu")[0];
        mobileMenu.style.left = "-150%";
    });
}