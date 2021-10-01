let menu = document.querySelector("#menu-btn");
let menuInner = menu.querySelector("i");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menuInner.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuInner.classList.remove("fa-times");
  navbar.classList.remove("active");
};
