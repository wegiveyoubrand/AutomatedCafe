let welcome,
  date = new Date(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();

if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}
if (hour < 12) {
  welcome = "Morning";
} else if (hour < 17) {
  welcome = "Afternoon";
} else {
  welcome = "Evening";
}

const welcomeContainer = document.querySelector("#greeting");

// USER
let newUser = localStorage.getItem("username");
welcomeContainer.textContent = `${welcome}, ${newUser}`;
