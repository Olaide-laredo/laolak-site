console.log("JS is fully connected");
/* =========================
   LAOLAK MASTER JS (FINAL)
========================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded");

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
     SMART CONTACT ROUTING
  ========================= */
  const pageServiceMap = {
    "repair.html": "Phone Repair",
    "gadget-sales.html": "Gadget Purchase",
    "web.html": "Web Development",
  };

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const mappedService = pageServiceMap[currentPage];

  if (mappedService) {
    document.querySelectorAll('a[href="contact.html"]').forEach((link) => {
      link.href = `contact.html?service=${encodeURIComponent(mappedService)}`;
    });
  }

  /* =========================
     MOBILE QUICK BAR
  ========================= */
  if (!document.querySelector(".mobile-quick-bar")) {
    const quoteLink = mappedService
      ? `contact.html?service=${encodeURIComponent(mappedService)}`
      : "contact.html";

    const quickBar = document.createElement("div");
    quickBar.className = "mobile-quick-bar";
    quickBar.innerHTML = `
      <a class="mobile-quick-link" href="tel:+2349060676932">Call Now</a>
      <a class="mobile-quick-link primary" href="https://wa.me/2349060676932" target="_blank" rel="noopener">WhatsApp</a>
      <a class="mobile-quick-link" href="${quoteLink}">Get Quote</a>
    `;
    document.body.appendChild(quickBar);
  }

  /* =========================
     BOOK PRODUCT BUTTON
  ========================= */
  const bookButtons = document.querySelectorAll(".book-btn");

  if (bookButtons.length > 0) {
    bookButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const product = btn.dataset.product || "Product";

        const message = `Hello LAOLAK
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
  const serviceSelect = document.getElementById("service");

  if (serviceSelect) {
    const serviceParam = new URLSearchParams(window.location.search).get(
      "service",
    );
    const allowedValues = ["Phone Repair", "Gadget Purchase", "Web Development"];

    if (serviceParam && allowedValues.includes(serviceParam)) {
      serviceSelect.value = serviceParam;
    }
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("contactName").value;
      const phone = document.getElementById("contactPhone").value;
      const service = serviceSelect ? serviceSelect.value : "";
      const messageInput = document.getElementById("contactMessage").value;

      const message = `Hello LAOLAK
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

      const message = `Hello LAOLAK
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

      const message = `Hello LAOLAK
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
     CATEGORY -> BRAND SWITCH
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

  /* ================= WHY HOME SLIDER DOTS ================= */

  const whySlider = document.querySelector(".why-home .why-right-grid");
  const whyCards = whySlider
    ? Array.from(whySlider.querySelectorAll(".why-mini-card"))
    : [];
  const whyDots = Array.from(
    document.querySelectorAll(".why-home .why-slider-dots .why-dot"),
  );
  const whySliderMq = window.matchMedia("(max-width: 820px)");

  if (whySlider && whyCards.length > 0 && whyDots.length > 0) {
    const setActiveDot = (index) => {
      whyDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === index);
      });
    };

    const closestCardIndex = () => {
      const currentScroll = whySlider.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Infinity;

      whyCards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - currentScroll);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    whySlider.addEventListener(
      "scroll",
      () => {
        if (!whySliderMq.matches) return;
        setActiveDot(closestCardIndex());
      },
      { passive: true },
    );

    whyDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        const target = whyCards[index];
        if (!target) return;

        whySlider.scrollTo({
          left: target.offsetLeft,
          behavior: "smooth",
        });

        setActiveDot(index);
      });
    });

    const syncDotsOnResize = () => {
      if (!whySliderMq.matches) {
        setActiveDot(0);
      } else {
        setActiveDot(closestCardIndex());
      }
    };

    syncDotsOnResize();
    if (whySliderMq.addEventListener) {
      whySliderMq.addEventListener("change", syncDotsOnResize);
    } else if (whySliderMq.addListener) {
      whySliderMq.addListener(syncDotsOnResize);
    }
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

      const message = `Hello LAOLAK
Web Project Request:

Name: ${name}
Phone: ${phone}
Type: ${type}
Details: ${details}`;

      const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }

  /* ================= PRICING BUTTONS ================= */

  document.querySelectorAll(".pricing-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const packageName = btn.dataset.package;

      const message = `Hello LAOLAK

I am interested in your:
${packageName}

Please give me more details.`;

      const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  });

  /* ================= PORTFOLIO FILTER ================= */

  const filterButtons = document.querySelectorAll(".filter-btn");

  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");

      const filter = btn.dataset.filter;

      portfolioCards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || filter === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ================= PORTFOLIO MODAL ================= */

  const portfolioModal = document.getElementById("portfolioModal");

  const modalImage = document.getElementById("modalImage");

  const modalTitle = document.getElementById("modalTitle");

  const modalCategory = document.getElementById("modalCategory");

  const modalDescription = document.getElementById("modalDescription");
  const livePreviewBtn = document.getElementById("livePreviewBtn");

  const modalClose = document.querySelector(".portfolio-close");

  const portfolioButtons = document.querySelectorAll(".portfolio-view-btn");

  if (
    portfolioModal &&
    modalImage &&
    modalTitle &&
    modalCategory &&
    modalDescription &&
    livePreviewBtn
  ) {
    portfolioButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const title = btn.dataset.title;
        const category = btn.dataset.category;
        const description = btn.dataset.description;
        const image = btn.dataset.image;
        const link = btn.dataset.link;

        modalTitle.textContent = title;
        modalCategory.textContent = category;
        modalDescription.textContent = description;
        modalImage.style.backgroundImage = `url(${image})`;
        livePreviewBtn.href = link;

        portfolioModal.classList.add("show");
      });
    });

    /* CLOSE MODAL */
    if (modalClose) {
      modalClose.addEventListener("click", () => {
        portfolioModal.classList.remove("show");
      });
    }

    /* CLICK OUTSIDE */
    window.addEventListener("click", (e) => {
      if (e.target === portfolioModal) {
        portfolioModal.classList.remove("show");
      }
    });

    /* ESC KEY */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        portfolioModal.classList.remove("show");
      }
    });
  }

  /* ================= LOADER ================= */

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
      setTimeout(() => {
        loader.classList.add("hide");
      }, 800);
    }
  });

  /* ================= ANIMATED COUNTERS ================= */

  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;

          const target = +counter.dataset.target;

          let current = 0;

          const increment = target / 60;

          const updateCounter = () => {
            current += increment;

            if (current < target) {
              counter.textContent = Math.floor(current);

              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();

          counterObserver.unobserve(counter);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });

  /* ================= HERO PARALLAX ================= */

  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (hero) {
      const scrollY = window.scrollY;

      hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
    }
  });

  /* ================= FAQ ACCORDION ================= */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  /* ================= SUPPORT FORM ================= */

  const supportForm = document.querySelector("#supportForm");

  if (supportForm) {
    supportForm.addEventListener(
      "submit",

      function (e) {
        e.preventDefault();

        const name = document.getElementById("supportName").value;

        const phone = document.getElementById("supportPhone").value;

        const category = document.getElementById("supportCategory").value;

        const messageInput = document.getElementById("supportMessage").value;

        const message = `Hello LAOLAK

Name: ${name}

Phone: ${phone}

Category: ${category}

Issue:
${messageInput}`;

        const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
      },
    );
  }

  /* =========================
   PAGE TRANSITIONS
========================= */

  const transition = document.querySelector(".page-transition");

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !link.hasAttribute("target")
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        if (transition) {
          transition.classList.add("active");
        }

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 700);
      });
    }
  });

  /* RESET TRANSITION */

  window.addEventListener("pageshow", () => {
    if (transition) {
      transition.classList.remove("active");
    }

    document.body.classList.remove("fade-out");
  });

  /* =========================
   PARALLAX SCROLL
========================= */

  const parallaxBg = document.querySelectorAll(".parallax-bg");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    parallaxBg.forEach((section) => {
      section.style.backgroundPositionY = `${scrollY * 0.5}px`;
    });
  });

  /* =========================
   MOUSE PARALLAX
========================= */

  const heroImages = document.querySelectorAll(".parallax-image");

  heroImages.forEach((img) => {
    window.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;

      const y = (window.innerHeight / 2 - e.clientY) / 40;

      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  /* =========================
   MAGNETIC BUTTONS
========================= */

  const magneticButtons = document.querySelectorAll(".magnetic-btn");

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;

      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0px, 0px)";
    });
  });

  /* =========================
   TEXT REVEAL
========================= */

  const revealTexts = document.querySelectorAll(".reveal-text");

  revealTexts.forEach((text) => {
    const words = text.textContent.trim().split(" ");

    text.innerHTML = "";

    words.forEach((word, index) => {
      const span = document.createElement("span");

      span.classList.add("word");

      span.style.transitionDelay = `${index * 0.08}s`;

      span.textContent = word + " ";

      text.appendChild(span);
    });
  });

  /* INTERSECTION OBSERVER */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  revealTexts.forEach((text) => {
    revealObserver.observe(text);
  });

  /* =========================
   DYNAMIC NAVBAR
========================= */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

