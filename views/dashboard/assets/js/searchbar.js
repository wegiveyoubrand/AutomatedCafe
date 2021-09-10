const searchBar = document.querySelector("#searchBar");
const modal = document.querySelector(".modal");

searchBar.addEventListener("click", () => {
  modal.classList.toggle("open");
});
