
document.addEventListener("DOMContentLoaded", () => {

  const filterButtons =
    document.querySelectorAll(
      ".filter-list button"
    );

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );

  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      // REMOVE ACTIVE BUTTON

      filterButtons.forEach((btn) => {

        btn.classList.remove("active");

      });

      // ADD ACTIVE BUTTON

      button.classList.add("active");

      const filterValue =
        button.dataset.filter;

      // FILTER PROJECTS

      projectCards.forEach((card) => {

        const category =
          card.dataset.category;

        if (
          filterValue === "all" ||
          category === filterValue
        ) {

          card.style.display = "grid";

          setTimeout(() => {

            card.classList.add(
              "show-project"
            );

          }, 100);

        } else {

          card.classList.remove(
            "show-project"
          );

          setTimeout(() => {

            card.style.display = "none";

          }, 250);

        }

      });

    });

  });


  const sliders =
    document.querySelectorAll(
      ".project-slider"
    );

  sliders.forEach((slider) => {

    const slides =
      slider.querySelectorAll("img");

    let currentSlide = 0;

    // SHOW FIRST SLIDE

    slides[currentSlide].classList.add(
      "active-slide"
    );

    // AUTO SLIDER

    setInterval(() => {

      slides[currentSlide].classList.remove(
        "active-slide"
      );

      currentSlide++;

      if (currentSlide >= slides.length) {

        currentSlide = 0;

      }

      slides[currentSlide].classList.add(
        "active-slide"
      );

    }, 3500);

  });


 
  const revealProjects = () => {

    projectCards.forEach((card) => {

      const cardTop =
        card.getBoundingClientRect().top;

      const revealPoint =
        window.innerHeight - 100;

      if (cardTop < revealPoint) {

        card.classList.add(
          "show-project"
        );

      }

    });

  };

  window.addEventListener(
    "scroll",
    revealProjects
  );

  revealProjects();


  projectCards.forEach((card) => {

    card.addEventListener(
      "mouseenter",
      () => {

        card.style.transform =
          "translateY(-6px)";

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "translateY(0px)";

      }
    );

  });


  
  const projectLinks =
    document.querySelectorAll(
      ".project-link"
    );

  projectLinks.forEach((button) => {

    button.addEventListener("click",
      (event) => {

        const ripple =
          document.createElement("span");

        ripple.classList.add(
          "ripple-effect"
        );

        const rect =
          button.getBoundingClientRect();

        ripple.style.left =
          `${event.clientX - rect.left}px`;

        ripple.style.top =
          `${event.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {

          ripple.remove();

        }, 600);

      }
    );

  });


  // =========================================================
  // LAZY IMAGE ANIMATION
  // =========================================================

  const projectImages =
    document.querySelectorAll(
      ".project-banner img"
    );

  projectImages.forEach((image) => {

    image.addEventListener("load", () => {

      image.classList.add("loaded-image");

    });

  });


  // =========================================================
  // PARALLAX EFFECT ON PROJECT IMAGE
  // =========================================================

  projectCards.forEach((card) => {

    const image =
      card.querySelector(
        ".project-banner img"
      );

    card.addEventListener("mousemove",
      (event) => {

        if (!image) return;

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const moveX =
          (x - rect.width / 2) / 30;

        const moveY =
          (y - rect.height / 2) / 30;

        image.style.transform =
          `translate(${moveX}px, ${moveY}px) scale(1.03)`;

      }
    );

    card.addEventListener("mouseleave",
      () => {

        if (!image) return;

        image.style.transform =
          "translate(0px, 0px) scale(1)";

      }
    );

  });


  // =========================================================
  // PROJECT SEARCH SYSTEM
  // =========================================================

  const searchInput =
    document.querySelector(
      "#projectSearch"
    );

  if (searchInput) {

    searchInput.addEventListener(
      "keyup",
      () => {

        const value =
          searchInput.value.toLowerCase();

        projectCards.forEach((card) => {

          const title =
            card.querySelector(
              ".project-title"
            ).innerText.toLowerCase();

          const description =
            card.querySelector(
              ".project-description"
            ).innerText.toLowerCase();

          if (
            title.includes(value) ||
            description.includes(value)
          ) {

            card.style.display = "grid";

          } else {

            card.style.display = "none";

          }

        });

      }
    );

  }


  // =========================================================
  // SCROLL PROGRESS BAR
  // =========================================================

  const progressBar =
    document.createElement("div");

  progressBar.classList.add(
    "scroll-progress-bar"
  );

  document.body.appendChild(
    progressBar
  );

  window.addEventListener("scroll", () => {

    const scrollTop =
      document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent =
      (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
      `${scrollPercent}%`;

  });


  // =========================================================
  // SMOOTH PAGE LOAD
  // =========================================================

  window.addEventListener("load", () => {

    document.body.classList.add(
      "projects-loaded"
    );

  });



});