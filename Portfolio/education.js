const educationData = {
    educationHeading: "Faizan Rabbani - Education",
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Information Technology University - Lahore",
            period: "August 2022 - Present"
        },
        {
            degree: "Intermediate in Engineering",
            institution: "Punjab Group of Colleges - Gujranwala",
            period: "August 2020 - June 2022"
        },
        {
            degree: "Matriculation in Science",
            institution: "Science Vertex School - Gujranwala",
            period: "July 2018 - June 2020"
        }
    ]
}



document.addEventListener("DOMContentLoaded", () => {
     // Populate Education Page
     if (document.getElementById("educationContent")) {
        document.getElementById("educationHeading").innerHTML = educationData.educationHeading;
        const educationContent = document.getElementById("educationContent");
        educationData.education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'degree';
            div.innerHTML = `<h3>${edu.degree}</h3>
                            <h4>${edu.institution}</h4>
                            <p>${edu.period}</p>
                            <hr>`;
            educationContent.appendChild(div);
        });
    }
});