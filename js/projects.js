
const projectsList = document.querySelector("#projects-list");
const filterButtons = document.querySelectorAll(".filter-btn");

// GitHub API address for our public repositories.
const githubURL = "https://api.github.com/users/Alperen-tech/repos?per_page=100";

// Store repositories after fetching them.
let allProjects = [];

// Displays a message inside the project list.
function showMessage(message) {
    const li = document.createElement("li");
    li.textContent = message;

    projectsList.replaceChildren(li);
}

// Creates project cards from GitHub data.
function renderProjects(repos) {
    projectsList.replaceChildren();

    repos.forEach((repo) => {
        // Create semantic HTML elements.
        const li = document.createElement("li");
        const article = document.createElement("article");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const link = document.createElement("a");

        // Add CSS class for styling.
        article.classList.add("project-card");

        // GitHub repository information.
        title.textContent = repo.name;

        description.textContent =
            repo.description || "No description available.";

        link.textContent = "View on GitHub";
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        // Add elements to the project card.
        article.append(title, description, link);
        li.append(article);

        // Add the card to the page.
        projectsList.append(li);
    });
}

// Filters repositories by programming language.
function filterProjects(language) {
    // Show all projects or only projects matching the language.
    const filteredProjects = language === "all"
        ? allProjects
        : allProjects.filter((repo) => repo.language === language);

    // Display a message if no repositories match.
    if (filteredProjects.length === 0) {
        showMessage("No projects found for this filter.");
        return;
    }

    // Display filtered repositories.
    renderProjects(filteredProjects);
}

// Listen for clicks on the filter buttons.
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the selected filter from the HTML data-filter attribute.
        const selectedFilter = button.dataset.filter;

        // Update which button is active.
        filterButtons.forEach((btn) => {
            const isActive = btn === button;

            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        // Display projects matching the selected filter.
        filterProjects(selectedFilter);
    });
});

// Fetch repositories from GitHub API.
async function loadProjects() {
    showMessage("Loading projects...");

    // Disable filters until the repositories have loaded.
    filterButtons.forEach((button) => {
        button.disabled = true;
    });

    try {
        const response = await fetch(githubURL, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        // Check the HTTP response.
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        // Convert the JSON response into JavaScript data.
        const repos = await response.json();

        // Validate the response.
        if (!Array.isArray(repos)) {
            throw new Error("Invalid GitHub data");
        }

        // Store the repositories for filtering.
        allProjects = repos;

        // Handle an empty repository list.
        if (allProjects.length === 0) {
            showMessage("No projects available yet.");
            return;
        }

        // Enable the filter buttons.
        filterButtons.forEach((button) => {
            button.disabled = false;
        });

        // Display all repositories initially.
        filterProjects("all");

    } catch (error) {
        console.error("Failed to load projects:", error);

        showMessage(
            "Could not load projects. Please try again later."
        );
    }
}

// Start loading projects.
loadProjects();
