// FADE IN ON LOAD
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// FADE OUT ON PAGE CHANGE (luxury feel)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("mailto") &&
      !href.startsWith("tel")
    ) {
      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});

// SCROLL REVEAL
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.7s ease";
  observer.observe(sec);
});
