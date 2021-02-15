const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const cross = document.querySelector(".cross");
hamburger.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("display-open");
  body.classList.add("overflow");
  hamburger.classList.add("display-close");
  cross.classList.remove("display-close");
});
cross.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("display-open");
  body.classList.remove("overflow");
  hamburger.classList.remove("display-close");
  cross.classList.add("display-close");
});
