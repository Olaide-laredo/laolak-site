// =====================
// HAMBURGER TOGGLE
// =====================

// select elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// click event
hamburger.addEventListener("click", () => {
  // toggle active class
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const elements = document.querySelectorAll(".fade-up");

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

elements.forEach((el) => observer.observe(el));

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.style.left = e.clientX - rect.left - size / 2 + "px";
    circle.style.top = e.clientY - rect.top - size / 2 + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// Loop through all cards
document.querySelectorAll(".service-card").forEach((card) => {
  // Mouse move inside card
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    // Get mouse position inside card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate movement (-10 to 10 range)
    const moveX = (x / rect.width - 0.5) * 10;
    const moveY = (y / rect.height - 0.5) * 10;

    // Apply transform
    card.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // Reset when mouse leaves
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0,0)";
  });
});

// Select all buttons
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    // Mouse position inside button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Movement strength
    const moveX = (x / rect.width - 0.5) * 8;
    const moveY = (y / rect.height - 0.5) * 8;

    // Apply transform
    btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // Reset when leaving
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});
