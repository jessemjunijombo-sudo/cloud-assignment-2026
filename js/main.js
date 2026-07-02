// =====================================================
// JMJ SMART TIME — main.js (dark mode + mobile menu)
// =====================================================

(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const burger = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");

  // --- Dark mode: soma preference iliyohifadhiwa ---
  const saved = localStorage.getItem("jmj-theme");
  if (saved === "dark") {
    root.setAttribute("data-theme", "dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("jmj-theme", "light");
        toggleBtn.textContent = "🌙";
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("jmj-theme", "dark");
        toggleBtn.textContent = "☀️";
      }
    });
  }

  // --- Menu ya simu (burger) ---
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // --- Fungua form ya mawasiliano bila reload (demo) ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const msg = document.getElementById("cf-message").value.trim();
      const text = encodeURIComponent(
        `Habari JMJ Smart Time, naitwa ${name}. ${msg}`
      );
      window.open(`https://wa.me/255752774166?text=${text}`, "_blank");
    });
  }
})();