// ✅ Disable transitions during initial page load
document.documentElement.classList.add("no-transition");

window.addEventListener("load", () => {
    setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
    }, 50); // ✅ Short delay to re-enable transitions after page load
});

document.addEventListener("DOMContentLoaded", () => {
    // 🌙 Theme Toggle Elements
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // 🚀 Scroll to Top Button Elements
    const scrollButton = document.getElementById("scrollToTop");

    // 🌙 Load Theme from Local Storage
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme); // ✅ Set the correct icon on load

    // ✅ Function to Update Theme Icon
    function updateIcon(theme) {
        themeIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    // 🌙 Toggle Theme on Click
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.add("no-transition"); // ✅ Temporarily disable transitions during toggle

            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateIcon(newTheme);

            setTimeout(() => {
                document.body.classList.remove("no-transition"); // ✅ Re-enable transitions shortly after
            }, 50); // Short delay for smooth theme switching
        });
    }

    // 🚀 Scroll to Top Button Logic
    if (scrollButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                scrollButton.classList.add("show");
            } else {
                scrollButton.classList.remove("show");
            }
        });

        scrollButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        console.log("Scroll to Top button initialized."); // Debugging Log
    } else {
        console.error("Scroll to Top button not found.");
    }
});