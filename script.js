/* ===================================== */
/* LAOLAK TECHNOLOGIES - MAIN SCRIPT FILE */
/* ===================================== */

/*
  This file is built in a SAFE STRUCTURE:
  - Each feature checks if elements exist
  - Prevents errors on different pages
  - Works across ALL pages (home, contact, etc.)
*/

/* ===================================== */
/* WAIT FOR PAGE TO LOAD */
/* ===================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("LAOLAK JS LOADED ✅");

  /* ===================================== */
  /* MOBILE NAVIGATION (HAMBURGER MENU) */
  /* ===================================== */

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Only run if BOTH elements exist
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      // Toggle active class for animation
      hamburger.classList.toggle("active");

      // Show or hide menu
      navMenu.classList.toggle("show");
    });
  }

  /* ===================================== */
  /* FADE-UP ANIMATION (SCROLL EFFECT) */
  /* ===================================== */

  const fadeElements = document.querySelectorAll(".fade-up");

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    fadeElements.forEach((el) => observer.observe(el));
  }

  /* ===================================== */
  /* SERVICE CARD RIPPLE EFFECT (CLICK FEEDBACK) */
  /* ===================================== */

  const serviceCards = document.querySelectorAll(".service-card");

  if (serviceCards.length > 0) {
    serviceCards.forEach((card) => {
      card.addEventListener("click", function (e) {
        // Create ripple element
        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        // Get click position
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Add ripple to card
        card.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  /* ===================================== */
  /* SMOOTH SCROLL (INTERNAL LINKS) */
  /* ===================================== */

  const links = document.querySelectorAll('a[href^="#"]');

  if (links.length > 0) {
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        // Ignore empty links
        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }

  /* ===================================== */
  /* CONTACT FORM → WHATSAPP (FIXED VERSION) */
  /* ===================================== */

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get user inputs
      const name = document.getElementById("name").value.trim();
      const service = document.getElementById("service").value.trim();
      const message = document.getElementById("message").value.trim();

      // Your WhatsApp number (CORRECT FORMAT)
      const phoneNumber = "2349060676932";

      // Build clean message
      const text = `Hello LAOLAK,

Name: ${name}
Service: ${service}
Issue: ${message}`;

      // Encode message (VERY IMPORTANT)
      const encodedText = encodeURIComponent(text);

      // Open WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    });
  }
});

const category = document.getElementById("category");
const brand = document.getElementById("brand");

if (category && brand) {
  const data = {
    phones: ["Apple", "Samsung", "Infinix", "Tecno", "Xiaomi"],
    laptops: ["HP", "Dell", "Lenovo", "Asus", "Acer"],
    accessories: ["Charger", "Power Bank", "Speaker", "Earbuds", "Cable"],
  };

  category.addEventListener("change", function () {
    const selected = category.value;

    brand.innerHTML = `<option value="">Select Option</option>`;

    if (data[selected]) {
      data[selected].forEach((item) => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        brand.appendChild(option);
      });
    }
  });
}

/* WHATSAPP FORM */

const form = document.getElementById("requestForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cat = document.getElementById("category").value;
    const brandVal = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const details = document.getElementById("details").value;

    const message = `Hello LAOLAK, I want a device:

Category: ${cat}
Brand/Type: ${brandVal}
Model: ${model}
Details: ${details}`;

    const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}
