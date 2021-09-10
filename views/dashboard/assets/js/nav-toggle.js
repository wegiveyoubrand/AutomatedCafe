const navToggle = document.querySelector(".nav-toggle");
const sideBar = document.querySelector(".side-nave");
const wrapper = document.querySelector(".container");

navToggle.addEventListener("click", (e) => {
  e.preventDefault;
  navToggle.classList.toggle("active");
  sideBar.classList.toggle("active");
  wrapper.classList.toggle("sidebar_open");
});
