const modal = document.querySelector(".modal");
const modalCloser = document.querySelector("#modal-close");

function closeModal() {
  modalCloser.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("close");
  });
}

closeModal();
