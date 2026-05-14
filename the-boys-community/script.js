// Fade in effect

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// Button click animation

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.1)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});