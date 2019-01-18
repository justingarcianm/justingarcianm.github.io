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

var projectTitle = document.querySelectorAll(".project-title")

function showProject(event) {
    if (event.target === proj1) {
        test("proj1");
    } else if (event.target === proj2) {
        test("proj2");
    } else if (event.target === proj3) {
        test("proj3");
    } else if (event.target === proj4) {
        test("proj4");
    } else if (event.target === proj5) {
        test("proj5");
    } else if (event.target === proj6) {
        test("proj6");
    } else {
        console.log("not a proj")
    }
}

function test(test) {
    console.log(test)
}

(function () {
    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].addEventListener("click", showProject);
    }
})();
