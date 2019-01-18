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

var proj1 = document.getElementById("proj-1"),
    proj2 = document.getElementById("proj-2"),
    proj3 = document.getElementById("proj-3"),
    proj4 = document.getElementById("proj-4"),
    proj5 = document.getElementById("proj-5"),
    proj6 = document.getElementById("proj-6");

var p1Content = document.querySelector(".p1Content");

var projectTitle = document.querySelectorAll(".project-title")

function showProject(event) {
    if (event.target === proj1) {
        slider(proj1, "slider1", p1Content);
    } else if (event.target === proj2) {
        slider(proj2);
    } else if (event.target === proj3) {
        slider(proj3);
    } else if (event.target === proj4) {
        slider(proj4);
    } else if (event.target === proj5) {
        slider(proj5);
    } else if (event.target === proj6) {
        slider(proj6);
    } else {
        console.log("not a proj")
    }
}

function slider(slideId, slideClass, slideText) {
    // opens slide
    slideToggle(slideId, slideClass)
    // adds title from main doc to slide
    document.querySelector(".section-title").textContent = slideId.textContent
    // dispalys the content and toggles an animation to the slide
    display(slideText)
}
//  function for slide toggler
function slideToggle(id, cls) {
    id.classList.toggle(cls);
}
// function for animations and text
function display(disp) {
    if (disp.style.display != "grid" && disp.classList != ("w3-animate-left")) {
        disp.style.display = "grid"
        disp.classList.add("w3-animate-left")
    } else {
        disp.style.display = "none"
        disp.classList.remove("w3-animate-left")
    }
}

(function () {
    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].addEventListener("click", showProject);
    }
})();
