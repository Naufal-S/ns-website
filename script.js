
/* =====================================
   NS WEB STUDIO JAVASCRIPT
===================================== */


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


/* OPEN AND CLOSE MOBILE MENU */

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


/* CLOSE MENU WHEN A NAVIGATION LINK IS CLICKED */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* AUTOMATIC FOOTER YEAR */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* WEBSITE LOADED */

console.log("NS Web Studio website loaded successfully!");

/* FAQ ACCORDION */

document.querySelectorAll(".faq-question").forEach(function(button) {

    button.addEventListener("click", function() {

        const faqItem = button.parentElement;

        faqItem.classList.toggle("active");

    });

});

/* ==============================
   NS WEB STUDIO PRELOADER
============================== */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function () {

            preloader.classList.add("loader-hidden");

        }, 700);

    }

});

/* ==============================
   MOBILE NAVIGATION
============================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll("#navLinks a");

    if (!menuToggle || !navMenu) return;

    // Open and close menu
    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

    // Close menu when switching to desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

});
