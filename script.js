/* =========================
   LAOLAK MASTER JS (FINAL)
========================= */

document.addEventListener("DOMContentLoaded", function () {
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
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const productCard = btn.closest(".product-card");
        const productName =
          btn.dataset.product ||
          productCard?.querySelector("h4")?.textContent.trim() ||
          "Product";
        const price = productCard?.querySelector(".price")?.textContent.trim();
        const product = price ? `${productName} (${price})` : productName;

        const message = `Hello LAOLAK
I want to book this product:
${product}`;

        const url = `https://wa.me/2349060676932?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
      });
    });
  }

  /* =========================
     TIPS CATEGORY JUMP STATE
  ========================= */
  const tipsJumpLinks = document.querySelectorAll(".tips-jump-list .mp-chip");

  tipsJumpLinks.forEach((link) => {
    link.addEventListener("click", () => {
      tipsJumpLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

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

  /* =========================
     SERVICE / PROJECT TRACKER
  ========================= */

  const trackerData = {
    repair: {
      "LT-RPR-1042": {
        step: 2,
        progress: 45,
        status: "Diagnosis in progress. Component checks ongoing.",
        eta: "Ready in 18 hours",
      },
      "LT-RPR-1107": {
        step: 3,
        progress: 72,
        status: "Repair in progress. Board-level fix underway.",
        eta: "Ready in 9 hours",
      },
      "LT-RPR-1188": {
        step: 4,
        progress: 100,
        status: "Service completed. Device ready for pickup.",
        eta: "Available now",
      },
    },
    web: {
      "LT-WEB-2084": {
        step: 2,
        progress: 36,
        status: "Strategy and content architecture in progress.",
        eta: "Next milestone in 2 days",
      },
      "LT-WEB-2196": {
        step: 3,
        progress: 64,
        status: "Frontend build in active production.",
        eta: "Next milestone in 36 hours",
      },
      "LT-WEB-2260": {
        step: 4,
        progress: 88,
        status: "Quality assurance and responsive testing in progress.",
        eta: "Launch prep in 1 day",
      },
      "LT-WEB-2301": {
        step: 5,
        progress: 100,
        status: "Project launched successfully.",
        eta: "Live now",
      },
    },
  };

  const trackerForms = document.querySelectorAll("[data-tracker-form]");

  const clearTrackerState = (scope) => {
    const fill = scope.querySelector("[data-tracker-fill]");
    const status = scope.querySelector(".tracker-status");
    const meta = scope.querySelector("[data-tracker-meta]");
    const steps = scope.querySelectorAll("[data-track-step]");

    if (fill) fill.style.width = "0%";
    if (status) status.textContent = "Tracking code not found. Please confirm the code.";
    if (meta) meta.textContent = "Need help? Request your tracking code on WhatsApp.";
    steps.forEach((step) => step.classList.remove("active", "current"));
  };

  const applyTrackerState = (scope, code, payload) => {
    const fill = scope.querySelector("[data-tracker-fill]");
    const status = scope.querySelector(".tracker-status");
    const meta = scope.querySelector("[data-tracker-meta]");
    const steps = scope.querySelectorAll("[data-track-step]");

    if (fill) fill.style.width = `${payload.progress}%`;
    if (status) status.textContent = payload.status;
    if (meta) meta.textContent = `Code: ${code} | ETA: ${payload.eta}`;

    steps.forEach((step) => {
      const stepIndex = Number(step.dataset.trackStep || 0);
      step.classList.toggle("active", stepIndex <= payload.step);
      step.classList.toggle("current", stepIndex === payload.step);
    });
  };

  trackerForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const type = form.dataset.trackerType || "";
      const input = form.querySelector("[data-tracker-input]");
      const scope = form.closest(".tracker-shell");

      if (!input || !scope) return;

      const code = input.value.trim().toUpperCase();
      const payload = trackerData[type] ? trackerData[type][code] : null;

      if (!payload) {
        clearTrackerState(scope);
        return;
      }

      applyTrackerState(scope, code, payload);
    });
  });

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

  const animateCounter = (counter) => {
    if (counter.dataset.animated === "true") return;

    const target = Number(counter.dataset.target || 0);
    const start = Number(counter.dataset.start || 0);
    const duration = Number(counter.dataset.duration || 1400);
    const decimals = Number(counter.dataset.decimals || 0);
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";

    if (Number.isNaN(target) || Number.isNaN(start)) return;

    const formatValue = (value) =>
      decimals > 0
        ? value.toFixed(decimals)
        : Math.floor(value).toLocaleString("en-US");

    let startTime = null;
    counter.dataset.animated = "true";

    const tick = (time) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = start + (target - start) * eased;

      counter.textContent = `${prefix}${formatValue(value)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = `${prefix}${formatValue(target)}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.45,
    },
  );

  counters.forEach((counter) => counterObserver.observe(counter));

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

  /* ================= FAQ SEARCH FILTER ================= */

  const faqSearchHub = document.querySelector(".faq-search-hub");
  const faqSearchInput = faqSearchHub?.querySelector("[data-faq-search-input]");
  const faqSearchButton = faqSearchHub?.querySelector("[data-faq-search-button]");
  const faqSearchChips = faqSearchHub?.querySelectorAll("[data-faq-query]");
  const faqSection = document.querySelector(".faq");

  if (faqSearchInput && faqSection) {
    const faqContainer = faqSection.querySelector(".container");
    const faqCategories = Array.from(faqSection.querySelectorAll(".faq-category"));
    const faqEmpty = faqSection.querySelector("[data-faq-empty]");
    const normalizeFaqText = (value) => value.toLowerCase().trim();
    const faqItemsMeta = [];
    let activeCategory = "";

    Array.from(faqContainer.children).forEach((block) => {
      if (block.classList.contains("faq-category")) {
        activeCategory = block.textContent.trim();
      }

      if (block.classList.contains("faq-item")) {
        faqItemsMeta.push({
          category: activeCategory,
          element: block,
          text: normalizeFaqText(`${activeCategory} ${block.textContent}`),
        });
      }
    });

    const setActiveFaqChip = (query) => {
      faqSearchChips.forEach((chip) => {
        chip.classList.toggle(
          "active",
          normalizeFaqText(chip.dataset.faqQuery || "") === query,
        );
      });
    };

    const applyFaqSearch = () => {
      const query = normalizeFaqText(faqSearchInput.value);
      let visibleCount = 0;

      faqItemsMeta.forEach(({ element, text }) => {
        const isVisible = !query || text.includes(query);
        element.classList.toggle("is-hidden", !isVisible);

        if (!isVisible) {
          element.classList.remove("active");
        } else {
          visibleCount += 1;
        }
      });

      faqCategories.forEach((category) => {
        const categoryName = normalizeFaqText(category.textContent);
        const hasVisibleItems = faqItemsMeta.some(
          (item) =>
            normalizeFaqText(item.category) === categoryName &&
            !item.element.classList.contains("is-hidden"),
        );

        category.classList.toggle("is-hidden", query && !hasVisibleItems);
      });

      if (faqEmpty) {
        faqEmpty.classList.toggle("show", visibleCount === 0);
      }

      setActiveFaqChip(query);
    };

    faqSearchInput.addEventListener("input", applyFaqSearch);

    faqSearchButton?.addEventListener("click", () => {
      applyFaqSearch();
      faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    faqSearchChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        faqSearchInput.value = chip.dataset.faqQuery || "";
        applyFaqSearch();
        faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

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
   HOMEPAGE PREMIUM SLIDER
========================= */

  const premiumSliders = document.querySelectorAll("[data-hx-slider]");

  premiumSliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".hx-slide"));
    const dots = Array.from(slider.querySelectorAll(".hx-slide-dot"));
    const prevBtn = slider.querySelector(".hx-slide-nav.prev");
    const nextBtn = slider.querySelector(".hx-slide-nav.next");

    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoTimer = null;
    let touchStartX = 0;
    let touchEndX = 0;

    const setSlide = (newIndex) => {
      const total = slides.length;
      currentIndex = (newIndex + total) % total;

      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    };

    const goNext = () => setSlide(currentIndex + 1);
    const goPrev = () => setSlide(currentIndex - 1);

    const stopAuto = () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    };

    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(goNext, 4800);
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goPrev();
        startAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        goNext();
        startAuto();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        setSlide(index);
        startAuto();
      });
    });

    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);

    slider.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    slider.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const delta = touchStartX - touchEndX;

        if (Math.abs(delta) > 45) {
          if (delta > 0) {
            goNext();
          } else {
            goPrev();
          }
          startAuto();
        }
      },
      { passive: true },
    );

    setSlide(0);
    startAuto();
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

