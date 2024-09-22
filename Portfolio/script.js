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
            link: "education.html"
        },
        {
            title: "Projects",
            link: "project.html"
        },
        {
            title: "Short Courses",
            link: "shortcourses.html"
        }
    ],
    services: [
        {
            title: "Website Design",
            description: "I offer professional website design services focused on creating visually appealing, user-friendly, and responsive websites. With a keen eye for aesthetics and functionality, I design websites that effectively communicate your brand's identity and provide an intuitive user experience across all devices."
        },
        {
            title: "MERN Stack Development",
            description: "As a MERN stack developer, I build full-stack web applications using MongoDB, Express, React, and Node.js. My service includes creating scalable, dynamic, and high-performance web applications that are tailored to meet your business needs, offering seamless integration of frontend and backend systems."
        },
        {
            title: "Amazon Consultant",
            description: "I provide comprehensive Amazon Virtual Assistant services, including product hunting, sourcing, listing optimization, and PPC management. My expertise helps sellers streamline their operations, optimize product visibility, and enhance profitability on the Amazon marketplace."
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
        div.innerHTML = `<h3 class="hdg2">${item.title}</h3>
                        <a href="${item.link}" style="font-size: larger; font-weight: 900; color: blue;">Learn More</a>`;
        portfolioContent.appendChild(div);
    });

    const servicesContent = document.getElementById("services-content");
    portfolioData.services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'box';
        div.innerHTML = `<h2 class="hdg1">${service.title}</h2>
                         <p>${service.description}</p>`;
        servicesContent.appendChild(div);
    });

});