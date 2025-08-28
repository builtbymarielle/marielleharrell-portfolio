// fetch("projects.json")
//   .then((response) => response.json())
//   .then((projects) => {
//     const container = document.getElementById("projects-container");

//     projects.forEach((project) => {
//       const card = document.createElement("div");
//       card.className = "project-card";
//       card.innerHTML = `
//         <h3>${project.title}</h3>
//         <p><strong>Created:</strong> ${project.created}</p>
//         <p><strong>Languages:</strong> ${project.languages.join(", ")}</p>
//         <p>${project.description}</p>
//         <a href="${project.github}" target="_blank">GitHub</a>
//         <a href="${project.live}" target="_blank">Live Site</a>
//       `;
//       container.appendChild(card);
//     });
//   })
//   .catch((error) => console.error("Error loading projects:", error));
fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById("projects-container");

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";

      // Build languages with icons
      const languagesHtml = project.languages
        .map((lang) => {
          return `
          <span class="language">
            <img src="images/icons/${lang}.svg" alt="${lang}" class="language-icon" alt="${lang}" />
          </span>
        `;
        })
        .join(" ");

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>Created:</strong> ${project.created}</p>
        <p><strong>Languages:</strong> ${languagesHtml}</p>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">GitHub</a>
        <a href="${project.live}" target="_blank">Live Site</a>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading projects:", error));
