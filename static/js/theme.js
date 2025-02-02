document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Update icon based on theme
    function updateIcon(theme) {
        themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    updateIcon(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); // Save preference

        updateIcon(newTheme);
    });
});