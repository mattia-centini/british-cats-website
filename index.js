document.addEventListener("DOMContentLoaded", () => {
  // defining global variabled
  const menu = document.querySelector(".menu");
  const outerOne = document.querySelector(".outerOne");
  const outerTwo = document.querySelector(".outerTwo");
  const checkBox = document.querySelector(".toggler");
  const liItems = document.querySelectorAll(".outerTwo ul li");
  const section = [...document.querySelectorAll("section")];

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

  //close the menu once clicked on li items
  liItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.style.visibility = "hidden";
      outerOne.style.transform = "scale(0)";
      outerOne.style.transitionDuration = `${0.75}s`;
      outerTwo.style.opacity = 0;
    });
  });
});
