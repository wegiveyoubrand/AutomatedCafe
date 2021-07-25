const accordions = document.querySelectorAll("faq-card");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
   accordion.classList.toggle('active')
  });
});

// console.log(accordions);
