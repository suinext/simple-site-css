// const hamburger = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-epanded", true)
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
    // hamburger.toggleAttribute("hamburger-visible");
    closeIcon.toggleAttribute("close-visible");
});