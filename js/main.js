// reveal about text

const arrowDown = document.getElementById("arrow-down"),
    arrowUp = document.getElementById("arrow-up"),
    hiddenText = document.querySelector(".hidden-text");


function toggleFunction() {
    if (!arrowDown.classList.contains("arrow-toggle")) {
        arrowDown.classList.add("arrow-toggle");
        hiddenText.style.opacity = "1"
    } else {
        arrowDown.classList.remove("arrow-toggle");
        hiddenText.style.opacity = "0"
    }
}

arrowDown.addEventListener("click", toggleFunction);
arrowUp.addEventListener("click", toggleFunction);

// nav button animations
link = document.querySelectorAll(".link");
active = document.querySelector(".active")

function navFunction(e) {
    link.forEach(link => {
        link.classList.replace("fas", "far");
        link.style.color = "#D3AC2B;"
    });
    if (e.target.classList.contains("far")) {
        e.target.classList.replace("far", "fas")
    }
}

link.forEach(link => {
    link.addEventListener("click", navFunction)
});