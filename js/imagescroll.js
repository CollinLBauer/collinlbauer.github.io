var names = [];
var current = 0;

var imageContainer;
var indicator;
var left;
var right;


function getImageNames() {
    let imageList = JSON.parse(document.getElementById("pf_image_array").innerText);
    imageList.images.forEach(imageName => {
        console.log(imageName) //debug
        names.push(imageName);
    });
    indicator.textContent = current;
    
}

function rightScroll() {
    console.log("Right!")
    current++;

    if (current >= names.length) {
        current = 0;
    }
    indicator.textContent = names[current];
    imageContainer.setAttribute('src',names[current])
}

function leftScroll() {
    console.log("Left!")
    current--;

    if (current == -1) {
        current = names.length-1;
    }
    indicator.textContent = names[current];
    imageContainer.setAttribute('src',names[current])
}

function init() {

    imageContainer = document.querySelector("#pf_image_display");
    indicator = document.querySelector("#indicator");
    left = document.querySelector("#img_left");
    right = document.querySelector("#img_right");
    left.addEventListener("click", leftScroll);
    right.addEventListener("click", rightScroll);

    getImageNames();
}

window.onload = init;
