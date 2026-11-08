
const experienceList = document.querySelector("#experience-list");
const educationList = document.querySelector("#education-list");

// Denna funktion skapar en CV-lista från JSON-datan.

function renderCV(list, items, type) {
    list.replaceChildren();

    items.forEach((item) => {
        const li = document.createElement("li");
        const article = document.createElement("article");
        const top = document.createElement("div");
        const title = document.createElement("h3");
        const period = document.createElement("span");
        const subtitle = document.createElement("p");

        // Use the same CSS classes as the original portfolio
        article.classList.add("experience-item");
        top.classList.add("experience-top");

        if (type === "experience") {
            title.textContent = item.role;
            subtitle.textContent = item.company;
        } else {
            title.textContent = item.program;
            subtitle.textContent = item.school;
        }

        period.textContent = item.period;

        top.append(title, period);
        article.append(top, subtitle);

        if (type === "experience" && item.description) {
            const description = document.createElement("p");
            description.textContent = item.description;
            article.append(description);
        }

        li.append(article);
        list.append(li);
    });
}


// Hämtar informationen från vår JSON-fil.
async function loadCV() {
    try {
        const response = await fetch("./data/cv.json");

        // Kontrollerar om filen kunde hämtas.
        if (!response.ok) {
            throw new Error("Could not load CV data");
        }

        // Omvandlar JSON till ett JavaScript-objekt.
        const data = await response.json();

        // Kontrollerar att informationen är listor.
        if (!Array.isArray(data.experience) ||
            !Array.isArray(data.education)) {
            throw new Error("Invalid CV data");
        }

        renderCV(experienceList, data.experience, "experience");
        renderCV(educationList, data.education, "education");

    } catch (error) {
        console.error("Error loading CV:", error);

        experienceList.textContent = "Could not load work experience.";
        educationList.textContent = "Could not load education.";
    }
}

loadCV();
