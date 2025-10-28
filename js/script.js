// === DOM READY ===
document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     NAVIGATION MENU (Responsive)
     =========================== */
  const nav = document.querySelector("nav");
  const navList = nav.querySelector("ul");

  // Create a toggle button for mobile
  const navToggle = document.createElement("button");
  navToggle.classList.add("nav-toggle");
  navToggle.textContent = "☰";
  nav.prepend(navToggle);

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show-menu");
  });

  /* ===========================
     SCROLL TO TOP BUTTON
     =========================== */
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.classList.add("scroll-top");
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ===========================
     SMOOTH SCROLL FOR LINKS
     =========================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ===========================
     HERO TEXT FADE-IN ANIMATION
     (for index.html & about us.html)
     =========================== */
  const hero = document.querySelector("#hero");
  if (hero) {
    const heroText = hero.querySelector("h2");
    const heroSubText = hero.querySelector("p");
    if (heroText && heroSubText) {
      heroText.style.opacity = "0";
      heroSubText.style.opacity = "0";

      setTimeout(() => {
        heroText.style.transition = "opacity 1.5s ease";
        heroSubText.style.transition = "opacity 2s ease";
        heroText.style.opacity = "1";
        heroSubText.style.opacity = "1";
      }, 400);
    }
  }

  /* ===========================
     GALLERY POPUP VIEWER
     (for gallery.html)
     =========================== */
  const galleryImages = document.querySelectorAll(".gallery-card img");
  if (galleryImages.length > 0) {
    const popup = document.createElement("div");
    popup.classList.add("image-popup");
    popup.innerHTML = '<span class="close-popup">&times;</span><img src="" alt="Popup">';
    document.body.appendChild(popup);

    const popupImg = popup.querySelector("img");
    const closePopup = popup.querySelector(".close-popup");

    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        popup.classList.add("show");
        popupImg.src = img.src;
      });
    });

    closePopup.addEventListener("click", () => popup.classList.remove("show"));
    popup.addEventListener("click", e => {
      if (e.target === popup) popup.classList.remove("show");
    });
  }

  /* ===========================
     CONTACT FORM VALIDATION
     (for contact us.html)
     =========================== */
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const message = contactForm.querySelector('textarea[name="message"]');

      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert("⚠️ Please fill in all fields before submitting.");
      } else {
        alert("✅ Thank you for contacting Tee Networks! We’ll get back to you soon.");
      }
    });
  }

});

// === Tee Networks Animation Script ===

// Fade-in effect when elements enter the viewport
const fadeElements = document.querySelectorAll("section, .service-item, .gallery-grid img");

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

// Run on scroll and when page loads
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Animate buttons with a gentle bounce
const buttons = document.querySelectorAll(".cta-button");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("bounce");
    setTimeout(() => btn.classList.remove("bounce"), 500);
  });
});

// Zoom animation for images when they come into view
const imageElements = document.querySelectorAll("img");
const zoomInOnScroll = () => {
  imageElements.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      img.classList.add("zoom-in");
    }
  });
};
window.addEventListener("scroll", zoomInOnScroll);
window.addEventListener("load", zoomInOnScroll);

// === Tee Networks Ultimate Animation Script ===

// Fade-in & slide-in on scroll
const animatedElements = document.querySelectorAll("section, .service-item, .gallery-grid img");
function revealOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Parallax effect on hero image
window.addEventListener("scroll", () => {
  const hero = document.querySelector("#hero img");
  if (hero) {
    hero.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
  }
});

// Typewriter effect for hero text
const typewriter = document.querySelector("#hero h2");
if (typewriter) {
  const text = typewriter.textContent;
  typewriter.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();
}

// Lightbox for gallery images
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const lightImg = document.createElement("img");
    lightImg.src = img.src;
    while (lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
    lightbox.appendChild(lightImg);
  });
});
lightbox.addEventListener("click", () => lightbox.classList.remove("active"));

// Scroll progress bar
const progressBar = document.createElement("div");
progressBar.id = "progress-bar";
document.body.prepend(progressBar);
window.addEventListener("scroll", () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// Back-to-top button
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.textContent = "↑";
document.body.appendChild(backToTop);
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 500 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Floating glowing button animation

buttons.forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  });
});
