const portfolioData = {
    mainHeading: "Faizan Rabbani",
    hireBtn: "Hire Me",
    quote1: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے",
    quote2: "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
    quoteAuthor: "(علامہ اقبال)"
}






document.addEventListener("DOMContentLoaded", () => {
    // Populate home section
    document.getElementById("main-heading").innerHTML = `<h1>I am</h1>${portfolioData.mainHeading}`;
    document.getElementById("hire-btn").innerHTML = portfolioData.hireBtn;
    document.getElementById("quote1").innerHTML = portfolioData.quote1;
    document.getElementById("quote2").innerHTML = portfolioData.quote2;
    document.getElementById("quote-author").innerHTML = portfolioData.quoteAuthor;



});