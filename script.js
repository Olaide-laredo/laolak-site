console.log("JS is fully connected ✅");
/* =========================
   LAOLAK MASTER JS (FINAL)
========================= */

document.addEventListener("DOMContentLoaded", function () {
  console.log("JS Loaded ✅");

  /* =========================
     HAMBURGER MENU
  ========================= */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("show");
    });
  }

  /* =========================
     BOOK PRODUCT BUTTON
  ========================= */
  const bookButtons = document.querySelectorAll(".book-btn");

  if (bookButtons.length > 0) {
    bookButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const product = btn.dataset.product || "Product";

        const message = `Hello LAOLAK 👋
I want to book this product:
${product}`;

        const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
      });
    });
  }

  /* =========================
     CONTACT FORM
  ========================= */
  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("contactName").value;
      const phone = document.getElementById("contactPhone").value;
      const service = document.getElementById("service").value;
      const messageInput = document.getElementById("contactMessage").value;

      const message = `Hello LAOLAK 👋
Contact Request:

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${messageInput}`;

      const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }

  /* =========================
     REPAIR FORM
  ========================= */
  const repairForm = document.querySelector("#repairForm");

  if (repairForm) {
    repairForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("repairName").value;
      const issue = document.getElementById("repairIssue").value;
      const messageInput = document.getElementById("repairMessage").value;

      const message = `Hello LAOLAK 🔧
Repair Request:

Name: ${name}
Issue: ${issue}
Details: ${messageInput}`;

      const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }

  /* =========================
     PRODUCT REQUEST FORM
  ========================= */
  const requestForm = document.querySelector("#productRequestForm");

  if (requestForm) {
    requestForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const category = document.getElementById("category").value;
      const brand = document.getElementById("brand").value;
      const model = document.getElementById("model").value;
      const description = document.getElementById("description").value;

      const message = `Hello LAOLAK 📦
Product Request:

Category: ${category}
Brand: ${brand}
Model: ${model}
Details: ${description}`;

      const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }

  /* =========================
     CATEGORY → BRAND SWITCH
  ========================= */
  const categorySelect = document.getElementById("category");
  const brandSelect = document.getElementById("brand");

  if (categorySelect && brandSelect) {
    const brands = {
      phones: ["iPhone", "Samsung", "Tecno", "Infinix"],
      laptops: ["HP", "Dell", "Lenovo", "MacBook"],
      accessories: ["Charger", "Power Bank", "Speaker", "Earbuds"],
    };

    categorySelect.addEventListener("change", () => {
      const selected = categorySelect.value;

      brandSelect.innerHTML = `<option value="">Select Brand</option>`;

      if (brands[selected]) {
        brands[selected].forEach((item) => {
          const option = document.createElement("option");
          option.value = item;
          option.textContent = item;
          brandSelect.appendChild(option);
        });
      }
    });
  }

  /* =========================
     FADE-UP ANIMATION
  ========================= */
  const faders = document.querySelectorAll(".fade-up");

  if (faders.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    faders.forEach((el) => observer.observe(el));
  }

  /* ================= WEB FORM ================= */

  const webForm = document.querySelector("#webForm");

  if (webForm) {
    webForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("webName").value;
      const phone = document.getElementById("webPhone").value;
      const type = document.getElementById("webType").value;
      const details = document.getElementById("webDetails").value;

      const message = `Hello LAOLAK 💻
Web Project Request:

Name: ${name}
Phone: ${phone}
Type: ${type}
Details: ${details}`;

      const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }
});
