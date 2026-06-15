// fake contact form (no backend = no cost risk)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Demo only — message not actually sent.");
});
