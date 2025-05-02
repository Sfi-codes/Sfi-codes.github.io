const projects = [
  {
    projectLink: `project-sfi-codes.html`,
    thumbnail: "SfiCodes",
    projectText: "Personal Website",
  },
  {
    projectLink: `project-plant-trees.html`,
    thumbnail: "PlantTrees",
    projectText: "Android Kotlin and Java App",
  },
  {
    projectLink: `project-clash.html`,
    thumbnail: "Clash",
    projectText: "C# Multiplayer Game",
  },
  {
    projectLink: `project-event-website.html`,
    thumbnail: "Business Website",
    projectText: "MERN Website",
  },
  {
    projectLink: `project-task-management.html`,
    thumbnail: "Task Management",
    projectText: "MERN Application",
  },
    {
    projectLink: `project-secure-chat.html`,
    thumbnail: "Secure Chat",
    projectText: "Java Application",
  },
];

const displayProjects = () => {
  const projectsContainerDiv = document.createElement("div");
  projectsContainerDiv.className = "project-container";
  {
    projects.map((project) => {
      const thumbnailDiv = document.createElement("div");
      const textDiv = document.createElement("div");

      const linkElement = document.createElement("a");
      linkElement.href = project.projectLink;

      thumbnailDiv.className = "project-thumbnail";
      thumbnailDiv.textContent = project.thumbnail;

      textDiv.className = "project-text";
      textDiv.textContent = project.projectText;

      linkElement.appendChild(thumbnailDiv);
      linkElement.appendChild(textDiv);

      const projectContainer = document.createElement("div");
      projectContainer.appendChild(linkElement);

      projectsContainerDiv.appendChild(projectContainer);
    });
  }
  return projectsContainerDiv;
};

const app = document.getElementById("projects");
app.appendChild(displayProjects());
