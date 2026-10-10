// ====== EDIT THIS: add your real email address ======
const MY_EMAIL = "your-email@example.com";
// =====================================================

// Current year for the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Contact form: opens the visitor's email app (no backend required)
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent("Message from portfolio: " + f.name.value);
  const body = encodeURIComponent(f.message.value + "\n\nFrom: " + f.name.value + " (" + f.email.value + ")");
  window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  document.getElementById("status").textContent = "Opening your email app...";
});
