const accordion = document.querySelectorAll("faq-card");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
// accordions.forEach((accordion) => {
//   accordion.addEventListener("click", () => {
//    accordion.classList.toggle('active')
//   });
// });

// console.log(accordions);
