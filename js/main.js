// opens paragraph in welcome section
const showArrow = document.querySelector("#showArrow"),
    arrowContent = document.querySelector('#arrowContent'),
    hideArrow = document.querySelector('#hideArrow');

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

const project = document.querySelectorAll(".project"),
    content = document.querySelectorAll(".content"),
    projectTitle = document.querySelectorAll(".project-title"),
    projectSection = document.getElementById("projects")


// when click event is triggered, a for loop sets the arguments for the slider
function showProject(event) {
    for (let i = 0; i < project.length && content.length; i++) {
        if (event.target === project[i]) {
            slider(project[i], "slider", content[i]);
        }
    }
}

// the arguments from the previous for loop are used for this slider function
function slider(project, slideClass, content) {
    // opens slide
    slideToggle(project, slideClass, content)
    // dispalys the content and toggles an animation to the slide
    display(content, project)
}

//  function for slide toggler
function slideToggle(project, slide) {
    project.classList.toggle(slide);
}
// function for animations and text
function display(disp, project) {
    if (disp.style.display != "block") {
        disp.style.display = "block"
        disp.classList.add("w3-animate-zoom")
        projectSection.classList.remove("w3-animate-opacity")
    } else {
        disp.style.display = "none"
        disp.classList.remove("w3-animate-zoom")
        projectSection.classList.add("w3-animate-opacity")
    }
}

// event listener when project title is clicked
(function () {
    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].addEventListener("click", showProject);
    }
})();

