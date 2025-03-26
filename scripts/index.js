const projects = [{
    projectLink: `project-sfi-codes.html`,
    thumbnail: 'SfiCodes',
    projectText: 'Personal Website'
},
{
    projectLink: `project-plant-trees.html`,
    thumbnail: 'PlantTrees',
    projectText: 'Kotlin Mobile App'
},
{
    projectLink: `project-clash.html`,
    thumbnail: 'Clash',
    projectText: 'Java Secure Chat'
},
{
    projectLink: `project-event-website.html`,
    thumbnail: 'Events Website',
    projectText: 'PHP Website'
},
{
    projectLink: `project-task-management.html`,
    thumbnail: 'Task Management App',
    projectText: 'MERN Application'
},
]

const displayProjects = () => {

    const projectsContainerDiv = document.createElement('div')
    projectsContainerDiv.className = 'project-container'
    {
        projects.map(project => {
            const thumbnailDiv = document.createElement('div')
            const textDiv = document.createElement('div')

            const linkElement = document.createElement('a');
            linkElement.href = project.projectLink

            thumbnailDiv.className = 'project-thumbnail'
            thumbnailDiv.textContent = project.thumbnail

            textDiv.className = 'project-text'
            textDiv.textContent = project.projectText

            linkElement.appendChild(thumbnailDiv)
            linkElement.appendChild(textDiv)

            const projectContainer = document.createElement('div')
            projectContainer.appendChild(linkElement)

            projectsContainerDiv.appendChild(projectContainer)
        })
    }
    return projectsContainerDiv
}

const app = document.getElementById('projects')
app.appendChild(displayProjects())
