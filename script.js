// Mobile navigation and small progressive enhancements for 420Katalog.
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  // Close the mobile menu after a navigation link is selected.
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
    });
  });

  // Return to the compact menu state if the viewport becomes desktop-sized.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
    }
  });
}

// Keep the copyright year current without requiring annual edits.
const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
