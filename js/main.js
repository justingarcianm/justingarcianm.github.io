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

// toggle slides for each project

var project = document.querySelectorAll(".project"),
    content = document.querySelectorAll(".content"),
    projectTitle = document.querySelectorAll(".project-title");


// when click event is triggered, a for loop sets the arguments for the slider
function showProject(event) {
    for (let i = 0; i < project.length && content.length; i++) {
        if (event.target === project[i]) {
            slider(project[i], "slider", content[i]);
        } else {
            console.log("not a proj")
        }
    }
}
// the arguments from the previous for loop are used for this slider function
function slider(project, slideClass, content) {
    // opens slide
    slideToggle(project, slideClass)
    // dispalys the content and toggles an animation to the slide
    display(content)
}
//  function for slide toggler
function slideToggle(project, content) {
    project.classList.toggle(content);
}
// function for animations and text
function display(disp) {
    if (disp.style.display != "block" && disp.classList != ("w3-animate-left")) {
        disp.style.display = "block"
        disp.classList.add("w3-animate-bottom")
    } else {
        disp.style.display = "none"
        disp.classList.remove("w3-animate-bottom")
    }
}
function closeSlide(event) {
    console.log(event.target)
}
// event listener when project title is clicked
(function () {
    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].addEventListener("click", showProject);
    }
})();

