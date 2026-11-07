const projectsList = document.querySelector("#projects-list");

// GitHub API address for our public repositories.
const githubURL = "https://api.github.com/users/Alperen-tech/repos?per_page=100";

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

// Fetch repositories from GitHub API.
async function loadProjects() {
    showMessage("Loading projects...");

    try {
        const response = await fetch(githubURL, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        // Check HTTP response.
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        // Convert the JSON response into JavaScript data.
        const repos = await response.json();

        // Validate the response.
        if (!Array.isArray(repos)) {
            throw new Error("Invalid GitHub data");
        }

        // Handle an empty repository list.
        if (repos.length === 0) {
            showMessage("No projects available yet.");
            return;
        }

        // Generate the project cards.
        renderProjects(repos);

    } catch (error) {
        console.error("Failed to load projects:", error);

        showMessage(
            "Could not load projects. Please try again later."
        );
    }
}

// Start loading projects.
loadProjects();
