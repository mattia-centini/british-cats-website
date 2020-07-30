// document.addEventListener("DOMContentLoaded", () => {

// defining global variabled
const menu = document.querySelector(".menu");
const outerOne = document.querySelector(".outerOne");
const outerTwo = document.querySelector(".outerTwo");
const checkBox = document.querySelector(".toggler");
const liItems = document.querySelectorAll(".outerTwo ul li");
const mainImg = document.querySelector(".landing-img");

const slides = [
  {
    img: "./img/IMG_5908.JPG",
  },
  {
    img: "./img/IMG_0098.JPG",
  },
];

let currenIndex = 0;
function slideShow() {
  mainImg.style.background = "url(" + slides[currenIndex].img + ")";
  mainImg.style.backgroundPosition = "center";
  mainImg.style.backgroundSize = "90% 90%";
  mainImg.style.backgroundRepeat = "no-repeat";
  currenIndex++;
  if (currenIndex == slides.length) {
    currenIndex = 0;
  }
  setTimeout(slideShow, 3000);
}

slideShow();

//burger menu pop-up
checkBox.addEventListener("click", () => {
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
    outerOne.style.transform = "scale(0)";
    outerOne.style.transitionDuration = `${0.75}s`;
    outerTwo.style.opacity = 0;
  } else {
    menu.style.visibility = "visible";
    outerOne.style.transform = "scale(1)";
    outerOne.style.transitionDuration = `${0.75}s`;
    outerTwo.style.opacity = 1;
  }
});

//close the menu once clicked on li items// in mobile view
liItems.forEach((item) => {
  let width = window.innerWidth;
  if (width < 600) {
    item.addEventListener("click", () => {
      menu.style.visibility = "hidden";
      outerOne.style.transform = "scale(0)";
      outerOne.style.transitionDuration = `${0.75}s`;
      outerTwo.style.opacity = 0;
    });
  }
});

window.addEventListener("wheel", (e) => {
  const delta = e.deltaY;
  if (delta < 0) {
    document.querySelector(".menu").style.top = "62px";
  } else {
    document.querySelector(".menu").style.top = "-62px";
  }
});

// });
