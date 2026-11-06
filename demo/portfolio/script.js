
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close navigation after clicking a link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Footer year
document.getElementById("year").textContent =
    new Date().getFullYear();
