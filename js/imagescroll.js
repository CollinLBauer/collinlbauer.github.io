var names = [];
var current = 0;

var imageContainer;
var indicator;
var left;
var right;


function getImageNames() {
    let imageList = JSON.parse(document.getElementById("pf_image_array").innerText);
    imageList.images.forEach(imageName => {
        console.log(imageName)
        names.push(imageName);
    });
    indicator.textContent = current;
    
}

function rightScroll() {
  current++;

  if (current > names.length) {
    current = 1;
  }
  indicator.textContent = current;
}

function leftScroll() {
  current--;

  if (current === 0) {
    current = names.length;
  }
  indicator.textContent = current;
}

function init() {

    imageContainer = document.querySelector("#screenShotGallery img");
    indicator = document.querySelector("#indicator");
    left = document.querySelector("#img_left");
    right = document.querySelector("#img_right");
    left.addEventListener("click", leftScroll);
    right.addEventListener("click", rightScroll);

    getImageNames();
}

window.onload = init;
