// =========================================================
// VEDANT PORTFOLIO MAIN SCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // MOBILE NAVIGATION
  // =========================================================

  const menuToggle =
    document.querySelector(".menu-toggle");

  const navLinks =
    document.querySelector(".nav-links");

  const navbar =
    document.querySelector(".navbar");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("active");

      // CHANGE ICON

      const icon =
        menuToggle.querySelector("i");

      if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

      } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

      }

    });

  }


  // =========================================================
  // CLOSE MENU ON NAV CLICK
  // =========================================================

  const navItems =
    document.querySelectorAll(".nav-links a");

  navItems.forEach((item) => {

    item.addEventListener("click", () => {

      navLinks.classList.remove("active");

      const icon =
        menuToggle.querySelector("i");

      icon.classList.remove("fa-xmark");

      icon.classList.add("fa-bars");

    });

  });


  // =========================================================
  // STICKY NAVBAR EFFECT
  // =========================================================

  window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

      navbar.classList.add("navbar-scrolled");

    } else {

      navbar.classList.remove("navbar-scrolled");

    }

  });


  // =========================================================
  // ACTIVE NAV LINK BASED ON PAGE
  // =========================================================

  const currentPage =
    window.location.pathname.split("/").pop();

  navItems.forEach((link) => {

    const linkPath =
      link.getAttribute("href");

    if (linkPath === currentPage) {

      link.classList.add("active");

    }

  });


  // =========================================================
  // REVEAL ON SCROLL
  // =========================================================

  const revealElements =
    document.querySelectorAll(
      ".tech-card, .featured-project-card, .journey-card, .profile-card, .skill-card, .experience-card, .certification-card, .faq-card, .project-card, .about-info-card, .stat-card"
    );

  const revealOnScroll = () => {

    const triggerBottom =
      window.innerHeight * 0.85;

    revealElements.forEach((element) => {

      const elementTop =
        element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {

        element.classList.add("show-element");

      }

    });

  };

  window.addEventListener(
    "scroll",
    revealOnScroll
  );

  revealOnScroll();


  // =========================================================
  // HERO TYPING EFFECT
  // =========================================================

  const heroSubtitle =
    document.querySelector(".hero-subtitle");

  if (heroSubtitle) {

    const text =
      "Java Backend Developer";

    let index = 0;

    heroSubtitle.textContent = "";

    function typeEffect() {

      if (index < text.length) {

        heroSubtitle.textContent +=
          text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

      }

    }

    typeEffect();

  }


  // =========================================================
  // COUNTER ANIMATION
  // =========================================================

  const counters =
    document.querySelectorAll(".stat-card h3");

  let counterStarted = false;

  function runCounters() {

    if (counterStarted) return;

    counters.forEach((counter) => {

      const target =
        parseInt(counter.innerText);

      let current = 0;

      const increment =
        Math.ceil(target / 40);

      const updateCounter = () => {

        current += increment;

        if (current >= target) {

          counter.innerText =
            target + "+";

        } else {

          counter.innerText =
            current + "+";

          requestAnimationFrame(
            updateCounter
          );

        }

      };

      updateCounter();

    });

    counterStarted = true;

  }

  // RUN COUNTERS WHEN VISIBLE

  const statsSection =
    document.querySelector(".quick-stats");

  if (statsSection) {

    window.addEventListener("scroll", () => {

      const statsTop =
        statsSection.getBoundingClientRect().top;

      if (
        statsTop <
        window.innerHeight - 100
      ) {

        runCounters();

      }

    });

  }


  // =========================================================
  // PARALLAX HERO IMAGE
  // =========================================================

  const heroImage =
    document.querySelector(".hero-image img");

  window.addEventListener("mousemove",
    (event) => {

      if (!heroImage) return;

      const x =
        (window.innerWidth / 2 - event.pageX) / 40;

      const y =
        (window.innerHeight / 2 - event.pageY) / 40;

      heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

    }
  );


  // =========================================================
  // CONTACT FORM VALIDATION
  // =========================================================

  const contactForm =
    document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit",
      (event) => {

        event.preventDefault();

        const name =
          document.getElementById("name");

        const email =
          document.getElementById("email");

        const subject =
          document.getElementById("subject");

        const message =
          document.getElementById("message");

        // REMOVE OLD ERRORS

        document
          .querySelectorAll(".error-message")
          .forEach((error) => error.remove());

        let hasError = false;

        // VALIDATE NAME

        if (name.value.trim().length < 3) {

          showError(
            name,
            "Name must contain at least 3 characters."
          );

          hasError = true;

        }

        // VALIDATE EMAIL

        const emailPattern =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
          !emailPattern.test(email.value)
        ) {

          showError(
            email,
            "Enter a valid email address."
          );

          hasError = true;

        }

        // VALIDATE SUBJECT

        if (subject.value.trim() === "") {

          showError(
            subject,
            "Subject is required."
          );

          hasError = true;

        }

        // VALIDATE MESSAGE

        if (
          message.value.trim().length < 10
        ) {

          showError(
            message,
            "Message must contain at least 10 characters."
          );

          hasError = true;

        }

        // SUCCESS

        if (!hasError) {

          const submitButton =
            contactForm.querySelector("button");

          submitButton.innerHTML =
            '<i class="fa-solid fa-check"></i> Message Sent';

          submitButton.disabled = true;

          submitButton.style.opacity = "0.8";

          setTimeout(() => {

            contactForm.reset();

            submitButton.innerHTML =
              '<i class="fa-solid fa-paper-plane"></i> Send Message';

            submitButton.disabled = false;

            submitButton.style.opacity = "1";

          }, 2500);

        }

      });

  }


  // =========================================================
  // ERROR FUNCTION
  // =========================================================

  function showError(input, message) {

    const error =
      document.createElement("small");

    error.className =
      "error-message";

    error.style.color = "#ef4444";

    error.style.marginTop = "6px";

    error.style.display = "block";

    error.innerText = message;

    input.parentElement.appendChild(error);

  }


  // =========================================================
  // SCROLL TO TOP BUTTON
  // =========================================================

  const scrollTopButton =
    document.createElement("button");

  scrollTopButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

  scrollTopButton.classList.add(
    "scroll-top-btn"
  );

  document.body.appendChild(
    scrollTopButton
  );

  scrollTopButton.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      scrollTopButton.classList.add(
        "show-scroll-btn"
      );

    } else {

      scrollTopButton.classList.remove(
        "show-scroll-btn"
      );

    }

  });


  // =========================================================
  // LOADING ANIMATION
  // =========================================================

  window.addEventListener("load", () => {

    document.body.classList.add(
      "loaded"
    );

  });


  // =========================================================
  // PERFORMANCE OPTIMIZATION
  // =========================================================

  let resizeTimeout;

  window.addEventListener("resize", () => {

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {

      console.log(
        "Window resized"
      );

    }, 200);

  });

  

});