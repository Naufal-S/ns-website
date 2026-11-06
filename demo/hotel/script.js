
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuBtn.textContent = isOpen ? "✕" : "☰";

  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");

function getLocalDate() {
  const today = new Date();

  return new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0];
}

function updateDateLimits() {
  const today = getLocalDate();

  checkIn.min = today;

  if (checkIn.value) {
    checkOut.min = checkIn.value;
  } else {
    checkOut.min = today;
  }
}

checkIn.addEventListener("change", () => {
  checkOut.value = "";
  updateDateLimits();
});

checkOut.addEventListener("change", () => {
  if (checkIn.value && checkOut.value <= checkIn.value) {
    checkOut.setCustomValidity(
      "Check-out date must be after check-in date."
    );
  } else {
    checkOut.setCustomValidity("");
  }
});

updateDateLimits();

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("guestName").value;

  const message = document.getElementById("formMessage");

  message.textContent =
    `Thank you, ${name}! This is a demo form. No reservation was made.`;

  this.reset();

  updateDateLimits();
});
