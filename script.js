const navbar = document.querySelector(".navbar");
const navlinksToggle = document.querySelector(".navbar_toggle-btn");

navlinksToggle.addEventListener("click", () => {
    navbar.classList.toggle("active-navlinks");
    
    if (navbar.classList.contains("active-navlinks")) {
        document.body.classList.add("scroll-of");       
    } else {
        document.body.classList.remove("scroll-of");      
    }
})


window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        navbar.classList.remove("active-navlinks")
        document.body.classList.remove("scroll-of");           
    }
})


const tabNames = document.querySelectorAll(".tab-name");
const tabs = document.querySelectorAll(".tab");

tabNames.forEach((tabName,tabIndex) => {

    tabName.addEventListener("click", () => {

        tabNames.forEach(activeName => activeName.classList.remove("active-name"));
        tabs.forEach(activeTab => activeTab.classList.remove("active-tab"));

        tabName.classList.add("active-name");
        tabs[tabIndex].classList.add("active-tab");
    })
})


const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
    })
})


const emailForm = document.getElementById("emailForm");
const email = document.getElementById("email");
const emailWrapper = document.querySelector(".email-wrapper");

emailForm.addEventListener("submit" , (e) => {

    const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(!validEmail.test(email.value.trim())){
        emailWrapper.classList.add("error");
        e.preventDefault();
    }
})