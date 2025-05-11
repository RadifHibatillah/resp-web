// Dark Mode Toggle Script
// Include this at the end of your HTML, or bundle it as script.js and reference with <script src="script.js"></script>

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");
  const root = document.documentElement;

  if (!toggle) return; // exit if toggle button not found

  // Determine saved preference or OS default
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    root.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    root.classList.remove("dark");
    toggle.textContent = "🌙";
  }

  // Toggle on click
  toggle.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
