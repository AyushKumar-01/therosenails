var navbar = document.querySelector(".navbar");
var topBanner = document.querySelector(".top-banner");

var isNavbarFixed = false;

// Function to toggle the class for the navbar
function toggleNavbar() {
    if (window.pageYOffset >= topBanner.offsetHeight && !isNavbarFixed) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        isNavbarFixed = true;
    } else if (window.pageYOffset < topBanner.offsetHeight && isNavbarFixed) {
        navbar.style.position = "relative";
        isNavbarFixed = false;
    }
}

window.addEventListener("scroll", toggleNavbar);

const navigation = document.querySelector('.navbar');

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding", navigationHeight + "px"
);
