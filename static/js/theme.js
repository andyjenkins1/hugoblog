document.addEventListener("DOMContentLoaded", () => {
    // 🌙 Theme Toggle Elements
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // 🚀 Scroll to Top Button Elements
    const scrollButton = document.getElementById("scrollToTop");

    // 🌙 Load Theme from Local Storage
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    function updateIcon(theme) {
        themeIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    updateIcon(savedTheme);

    // 🌙 Toggle Theme on Click
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let newTheme = currentTheme === "dark" ? "light" : "dark";

            document.body.classList.add("fade-out");
            themeIcon.classList.add("rotating");

            setTimeout(() => {
                document.documentElement.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
                updateIcon(newTheme);
                document.body.classList.remove("fade-out");

                setTimeout(() => {
                    themeIcon.classList.remove("rotating");
                }, 300);
            }, 500);
        });
    }

    // 🚀 Scroll to Top Button Logic (Fixed)
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