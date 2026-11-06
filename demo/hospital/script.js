
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const dateInput = document.getElementById("appointmentDate");

const today = new Date();
const localDate = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("patientName").value;
  const message = document.getElementById("formMessage");

  message.textContent =
    `Thank you, ${name}! This is a demo form. No appointment was booked.`;

  this.reset();
  dateInput.min = localDate;
});
