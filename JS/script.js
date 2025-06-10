// script.js
 const toggleButton = document.getElementById('toggleSidebar');
     const sidebar = document.getElementById('sidebar');
      const iconHamburger = document.getElementById('iconHamburger');
     const iconClose = document.getElementById('iconClose');

     toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    // Toggle icons
    iconHamburger.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });
// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

// mode toggle button
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  themeIcon.textContent = "☀️";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
