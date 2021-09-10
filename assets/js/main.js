const confirmStatus = document.querySelector("#confirmStatus");
const searchBar = document.querySelector("#search");

const toHome = document.querySelectorAll("#toHome");
const closeAside = document.querySelectorAll("#closeAside");

toHome.forEach((home) => {
  home.addEventListener("click", () => {
    location.href = "/index.html";
  });
});

closeAside.forEach((close) => {
  close.addEventListener("click", () => {
    aside.classList.remove("open");
    asideContent.classList.remove("open");
    body.classList.remove("fixed");
  });
});

const menuToggle = document.querySelector(".menuToggle");
const aside = document.querySelector("aside");
const asideContent = document.querySelector(".aside");
const body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
  aside.classList.toggle("open");
  asideContent.classList.add("open");
  body.classList.add("fixed");
});

let FreshersList = [];
console.log(searchBar);

// searchBar.addEventListener("keyup", (e) => {
//   const searchText = e.target.value;

//   const filteredFreshers = FreshersList.filter((Fresher) => {
//     return Fresher.JAMBRegNumber == searchText;
//   });

//   displayResponse(filteredFreshers);
// });

const LoadFreshers = async () => {
  try {
    const res = await fetch(
      "./data/admissionLists/2020/UNN-Admission-list-2020.json"
    );
    FreshersList = await res.json();
    displayResponse(FreshersList);
  } catch (err) {
    console.log(err);
  }
};

const displayResponse = (filteredFreshers) => {
  const htmlString = filteredFreshers
    .map((Fresher) => {
      return `
      <div class="Fresher--Data__Card">
       <p>Congratulations, ${Fresher.Surname} ${Fresher.Firstname}, you have been admitted to study in the Department of ${Fresher.Department}, in the University of Nigeria, Nsukka.</p>
       <button>Accept our Congratulations</button>
      </div>
  `;
    })
    .join("");
  confirmStatus.innerHTML = htmlString;
};

const modalResponse = document.querySelector(".modalResponse");
const activateModal = document.querySelector("#activateModal");
const closeModal = document.querySelector(".close-modal");

// activateModal.addEventListener("click", (e) => {
//   e.preventDefault;
//   modalResponse.classList.add("open");
// });
closeModal.addEventListener("click", (e) => {
  e.preventDefault;
  modalResponse.classList.remove("open");
  document.forms[0].reset();
});

LoadFreshers();
