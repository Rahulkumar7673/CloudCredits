function showPage(pageId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });

  const active = document.getElementById(pageId);
  if (active) {
    active.classList.remove("hidden");

    // Re-trigger animation
    const items = active.querySelectorAll(".card, .feature-box, .fadeIn");
    items.forEach((el) => {
      el.style.animation = "none";
      el.offsetHeight; // force reflow
      el.style.animation = "";
    });
  }
}

// Contact form success
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.style.display = "block";
    form.reset();
  });
});
