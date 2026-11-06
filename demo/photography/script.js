
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when selecting a link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Demo booking inquiry
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;

    formMessage.textContent =
        `Thank you, ${name}! Your ${service} inquiry was demonstrated successfully. ` +
        "No real booking has been sent.";

    bookingForm.reset();

});

// Footer year
document.getElementById("year").textContent =
    new Date().getFullYear();
