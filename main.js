const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-epanded", true)
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
    closeIcon.toggleAttribute("close-visible");
});

function toggleElements() {
    var el1 = document.getElementById('hamburger');
    var el2 = document.getElementById('close');

    // Toggle the visibility of the elements
    el1.classList.toggle('close-hidden');
    el2.classList.toggle('close-hidden');
  }