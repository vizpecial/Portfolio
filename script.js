document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Navbar Scroll Effect ---
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  //--2. Typing Effect with Different Colors Per Word ---
  const words = [
    "Programmer",
    "Web Developer",
    "Problem Solver",
    "Designer",
    "Creative Thinker",
    "Innovator",
    "Visionary",
    "Learner",
  ];

  // Colors that contrast well with blue-purple gradient
  const colors = [
    "#ffb347", // Orange
    "#ff6b9d", // Pink
    "#4ecdc4", // Teal
    "#ffd700", // Gold
    "#ff1493", // Deep Pink
    "#00fa9a", // Medium Spring Green
    "#87ceeb", // Sky Blue
    "#ff69b4", // Hot Pink
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const typingElement = document.querySelector(".typing-effect");

  function typeEffect() {
    currentWord = words[i];
    let displayText = currentWord.substring(0, j);

    typingElement.textContent = displayText;
    // Assign a consistent color to each word
    typingElement.style.color = colors[i % colors.length];

    if (!isDeleting && j < currentWord.length) {
      j++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(typeEffect, 100);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(typeEffect, 200);
      }
    }
  }

  typeEffect();

  // --- 3. Mobile Navigation (Hamburger Menu) ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // --- 4. Fade-in Animation on Scroll ---
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Scrolls into view → fade in
          entry.target.classList.add("visible");
        } else {
          // Scrolls out of view → fade out
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2, // 20% visible triggers the effect
    }
  );

  fadeElements.forEach((el) => observer.observe(el));

  // --- 5. Dynamic Year in Footer ---
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
