var images = [];
var descripts = [];
var curr = 0;

var image_container;
var img_desc_container;
var left;
var right;

// load image list from a JSON hidden in document
function getImages() {
    let imageList = JSON.parse(document.getElementById("pf_image_array").innerText);
    imageList.images.forEach(item => {
        console.log(item) //debug
        images.push(item);
    });
}

// load description list from a JSON hidden in document
function getImageDescriptions() {
    let descList = JSON.parse(document.getElementById("pf_image_desc_array").innerText);
    descList.image_desc.forEach(item => {
        console.log(item) //debug
        descripts.push(item);
    });
}

// cycles image left on user click
function leftScroll() {
    console.log("Left!")
    curr--;

    if (curr == -1) {
        curr = images.length-1;
    }
    img_desc_container.textContent = images[curr];
    image_container.setAttribute('src',names[curr])
}

// cycles image right on user click
function rightScroll() {
    console.log("Right!")
    curr++;

    if (curr >= images.length) {
        curr = 0;
    }
    img_desc_container.textContent = images[curr];
    image_container.setAttribute('src',names[curr])
}

// initializes variables from document and sets initial states
function init() {
    // get document elements
    image_container = document.querySelector("#pf_image_display");
    img_desc_container = document.querySelector("#img_desc");
    left = document.querySelector("#img_left");
    right = document.querySelector("#img_right");
    left.addEventListener("click", leftScroll);
    right.addEventListener("click", rightScroll);

    // get arrays
    getImages();
    getImageDescriptions();

    // set states
    img_desc_container.textContent = descripts[curr];
    image_container.setAttribute('src',names[curr])
}

window.onload = init;
