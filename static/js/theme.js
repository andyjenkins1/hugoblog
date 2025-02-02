document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Function to update icon
    function updateIcon(theme) {
        themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    updateIcon(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";

        // Add a temporary fade effect to the whole page
        document.body.classList.add("fade-out");

        // Add rotation + fade effect to the icon
        themeIcon.classList.add("rotating");

        setTimeout(() => {
            // Switch theme
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateIcon(newTheme);

            // Remove fade effect
            document.body.classList.remove("fade-out");

            // Remove animation class after effect
            setTimeout(() => {
                themeIcon.classList.remove("rotating");
            }, 300); // Delay to match the transition
        }, 500); // Matches CSS transition time
    });
});