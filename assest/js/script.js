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
  section.classList.add("hidden");
  observer.observe(section);
});
