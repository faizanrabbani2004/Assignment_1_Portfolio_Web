const shortData = {
    shortcourseHeading: "Faizan Rabbani - Short Courses",
    shortCourses: [
        {
            title: "Amazon Virtual Assistant",
            date: "October 2023",
            explanation: "I completed a comprehensive course on Amazon Virtual Assistant, where I learned product research, sourcing, listing optimization, and PPC campaign management. This course enabled me to effectively support Amazon sellers in optimizing their businesses.",
            img: "Virtual_Assistant.png",
            alt: "Amazon Virtual Assistant Certificate"
        },
        {
            title: "Freelancing",
            date: "June 2023",
            explanation: "In this freelancing course, I gained insights into building a freelance career, learning key strategies for finding clients, managing projects, and growing a sustainable online presence. It provided essential tools for success in the freelancing industry.",
            img: "Freelancing.png",
            alt: "Freelancing Certificate"
        }
    ]
}



document.addEventListener("DOMContentLoaded", () => {
    // Populate Short Courses Page
    if (document.getElementById("shortcourseContent")) {
        document.getElementById("shortcourseHeading").innerHTML = shortData.shortcourseHeading;
        const shortcourseContent = document.getElementById("shortcourseContent");
        shortData.shortCourses.forEach(course => {
            const div = document.createElement('div');
            div.className = 'course';
            div.innerHTML = `<h3>${course.title}</h3>
                            <h4>${course.date}</h4>
                            <p>${course.explanation}</p>
                            <img src="${course.img}" alt = "${course.alt}">
                            <hr>`;
            shortcourseContent.appendChild(div);
        });
    }
});