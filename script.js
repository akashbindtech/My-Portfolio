
// Get navigation elements
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Mobile menu open/close
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("show");

    const isOpen = navbar.classList.contains("show");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("show");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Set the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}