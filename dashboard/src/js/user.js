const openUser = document.querySelector(".avatar");
const userOptions = document.querySelector(".user_options");
const userLogout = document.querySelector("#user_logout");

openUser.addEventListener("click", () => {
  userOptions.classList.toggle("open");
});

userLogout.addEventListener("click", () => {
  location.href = "/index.html";
});

let callme = localStorage.getItem("username");
console.log(callme);

