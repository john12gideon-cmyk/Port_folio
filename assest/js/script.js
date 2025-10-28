// Typewriter effect
function typeWriter(element, text, speed = 100, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

// Animate name and tagline
window.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("typed-name");
  const taglineEl = document.getElementById("typed-tagline");

  typeWriter(nameEl, "John Matthew", 120, () => {
    setTimeout(() => {
      typeWriter(taglineEl, "Web Developer | Clean Code Enthusiast", 80);
    }, 500);
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.textContent = "↑ Top";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.display = "none";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "5px";
  scrollBtn.style.backgroundColor = "#007acc";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.cursor = "pointer";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Theme toggle
  const themeToggle = document.createElement("button");
  themeToggle.id = "themeToggle";
  themeToggle.textContent = "Toggle Theme";
  themeToggle.style.position = "fixed";
  themeToggle.style.top = "20px";
  themeToggle.style.right = "20px";
  themeToggle.style.padding = "10px 15px";
  themeToggle.style.border = "none";
  themeToggle.style.borderRadius = "5px";
  themeToggle.style.backgroundColor = "#444";
  themeToggle.style.color = "#fff";
  themeToggle.style.cursor = "pointer";
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  // Animated skill bars
  document.querySelectorAll(".skills li").forEach((li, index) => {
    li.style.opacity = "0";
    setTimeout(() => {
      li.style.transition = "opacity 0.6s ease-in-out";
      li.style.opacity = "1";
    }, index * 150);
  });

  // Interactive project cards
  document.querySelectorAll(".project").forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });
});
