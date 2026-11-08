
const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeText = document.querySelector(".theme-text");

const root = document.documentElement;

// Get the previously saved theme.
const savedTheme = localStorage.getItem("theme");

// Apply saved theme when the page loads.
if (savedTheme === "dark") {
    root.classList.add("dark-mode");
}

// Update the theme button.
function updateThemeButton() {
    const isDark = root.classList.contains("dark-mode");

    themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
    themeIcon.textContent = isDark ? "☀" : "☾";

    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeButton.setAttribute("aria-pressed", String(isDark));
}

// Listen for clicks on the theme button.
themeButton.addEventListener("click", () => {
    root.classList.toggle("dark-mode");

    const isDark = root.classList.contains("dark-mode");

    // Save theme in browser storage.
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeButton();
});

// Display the correct theme button when page loads.
updateThemeButton();
