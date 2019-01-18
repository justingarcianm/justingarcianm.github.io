// opens paragraph in welcome section
var showArrow = document.querySelector("#showArrow");
var arrowContent = document.querySelector('#arrowContent');
var hideArrow = document.querySelector('#hideArrow');

function showContent() {
    arrowContent.style.opacity = "1";
    arrowContent.classList.add("w3-animate-opacity");
    showArrow.style.display = "none";

}

function hideContent() {
    arrowContent.style.opacity = "0";
    showArrow.style.display = "block";
    arrowContent.classList.remove("w3-animate-opacity");
}
showArrow.addEventListener("click", showContent, false);
hideArrow.addEventListener("click", hideContent, false);

// reveals text for each project
var slide1 = document.querySelector("#slide1");
var trigger = document.querySelector(".trigger");
var close = document.querySelectorAll("close-button");

function showSlide() {
    slide1.style.opacity = ".9";
    slide1.classList.toggle("slide-content1")
    console.log("hello");
}

trigger.addEventListener("click", showSlide);