
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu after clicking a navigation link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Set today's date as the minimum reservation date
const dateInput = document.getElementById("date");

const today = new Date();
const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localDate;

// Demo reservation form
const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Thank you, ${name}! This is a demo inquiry form. ` +
        "No reservation has been sent or confirmed.";

    reservationForm.reset();

    dateInput.min = localDate;
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
