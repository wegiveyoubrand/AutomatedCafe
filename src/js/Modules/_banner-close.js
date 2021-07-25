const bannerClose = document.querySelector(".banner-close");
const banner = document.querySelector(".banner");

bannerClose.addEventListener("click", (e) => {
  e.preventDefault;
  banner.classList.add("close");
});
