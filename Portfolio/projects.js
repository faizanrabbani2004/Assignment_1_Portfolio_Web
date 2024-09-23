const projectsData={
    projectHeading: "Faizan Rabbani - Projects",
    projects: [
        {
            title: "Animation Simulation",
            course: "Computing Fundamentals and Programming",
            date: "November 2022"
        },
        {
            title: "Gomoku Game",
            course: "Computing Fundamentals and Programming",
            date: "November 2022"
        },
        {
            title: "Snake Game",
            course: "Object Oriented Programming",
            date: "January 2023"
        },
        {
            title: "Scientific Calculator",
            course: "Object Oriented Programming",
            date: "March 2023"
        },
        {
            title: "Chess Game",
            course: "Object Oriented Programming",
            date: "June 2023"
        },
        {
            title: "Automatic and Manual Light Brightness Control System",
            course: "Digital Logic Design",
            date: "June 2023"
        }
    ]
}

document.addEventListener("DOMContentLoaded", () => {
    // Populate Projects Page
    if (document.getElementById("projectContent")) {
        document.getElementById("projectHeading").innerHTML = projectsData.projectHeading;
        const projectContent = document.getElementById("projectContent");
        projectsData.projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'project';
            div.innerHTML = `<h3>${project.title}</h3>
                            <h4>${project.course}</h4>
                            <p>${project.date}</p>
                            <hr>`;
            projectContent.appendChild(div);
        });
    }
});