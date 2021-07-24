var names = [];

let imageContainer = document.querySelector("#screenShotGallery img");
let indicator = document.querySelector("#indicator");
let left = document.querySelector("#img_left");
let right = document.querySelector("#img_right");
let current = 0;

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

window.onload = getImageNames;
left.addEventListener("click", leftScroll);
right.addEventListener("click", rightScroll);