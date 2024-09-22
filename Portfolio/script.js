const portfolioData = {
    mainHeading: "Faizan Rabbani",
    hireBtn: "Hire Me",
    quote1: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے",
    quote2: "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
    quoteAuthor: "(علامہ اقبال)",

    aboutMe: {
        name: "Faizan Rabbani",
        description: "I am Faizan Rabbani, a dedicated BS Computer Science student with a passion for web development. Alongside my academic pursuits, I have honed my skills as a web developer, working on a variety of projects that enhance my technical expertise. Additionally, I am an experienced Amazon Virtual Assistant, proficient in product hunting, sourcing, listing optimization, and PPC management, which adds a versatile edge to my skill set.",
        profilePic: "345.jpg"
    },


    portfolio: [
        {
            title: "Education",
            link: "education.html",
            backgroundImage: "Education.avif"
        },
        {
            title: "Projects",
            link: "project.html",
            backgroundImage: "Projects.jpeg"
        },
        {
            title: "Short Courses",
            link: "shortcourses.html",
            backgroundImage: "Shortcourses.jpg"
        }
    ],

}






document.addEventListener("DOMContentLoaded", () => {
    // Populate home section
    document.getElementById("main-heading").innerHTML = `<h1>I am</h1>${portfolioData.mainHeading}`;
    document.getElementById("hire-btn").innerHTML = portfolioData.hireBtn;
    document.getElementById("quote1").innerHTML = portfolioData.quote1;
    document.getElementById("quote2").innerHTML = portfolioData.quote2;
    document.getElementById("quote-author").innerHTML = portfolioData.quoteAuthor;

    // Populate about section
    document.getElementById("name").innerHTML = portfolioData.aboutMe.name;
    document.getElementById("about-description").innerHTML = portfolioData.aboutMe.description;
    document.getElementById("profile-pic").src = portfolioData.aboutMe.profilePic;

    // Populate portfolio section
    const portfolioContent = document.getElementById("portfolio-content");
    portfolioData.portfolio.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'smallbox';
        div.id = `sb${index + 1}`;
        div.style.backgroundImage = `url(${item.backgroundImage})`;
        div.innerHTML = `<h3 class="hdg2">${item.title}</h3>
                        <a href="${item.link}" style="font-size: larger; font-weight: 900; color: blue;">Learn More</a>`;
        portfolioContent.appendChild(div);
    });


});