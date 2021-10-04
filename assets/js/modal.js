/* GLOBAL SELECTORS */

const modalBg = document.querySelector(".modalBg");

const modalTriggers = document.querySelectorAll(".modalTrigger");

const body = document.querySelector("body");

let userSelection = "";

/* */

/* FUNCTIONS */

// Function Modal Loading

function loadModal(modalTrigger) {
  userSelection = modalTrigger
    .querySelector("h2")
    .textContent.toLocaleLowerCase();

  modalBg.innerHTML = modalContentLoad();
}

/* */

// Function: Modal Content Loading

function modalContentLoad(e) {
  modalContent = "";
  if (userSelection == "jamb registration") {
    return (modalContent = `
    <div class="modal">
    <div class="modal__close"></div>
    <div class="form-container">
      <form action="#" class="form" ">
        <div class="input-group">
          <label for="u_name">Surname:</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label for="u_name">Firstname:</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label for="u_name">Valid Email:</label>
          <input type="password" />
        </div>
        <div class="input-group">
          <label for="u_name">Phone number:</label>
          <input type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
        `);
  } else if (userSelection == "web payment") {
    return (modalContent = ` 
    <div class = "modal">
        <div class= "modal__close"></div>
        <div class="form-container">
            <div> 
            Pay Remita</div>
        </div>
    </div>`);
  } else {
    return (modalContent = ` 
    <div class = "modal">
        <div class= "modal__close"></div>
        <div class="form-container">
            <form action="#" class="form" onsubmit="userStatus()">
                <div class="input-group">
                    <label for="u_name">Username:</label>
                    <input type="text" />
                </div>
                    <div class="input-group">
                    <label for="u_name">Password:</label>
                    <input type="password" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>`);
  }
}

/* */

// Function: Enable Modal Trigger

function enableModalTrigger(modalTrigger) {
  modalTrigger.addEventListener("click", () => {
    loadModal(modalTrigger);

    const modal = modalBg.querySelector(".modal");
    const closeModalBtn = modalBg.querySelector(".modal__close");

    modalContentLoad(modalTrigger);
    modal.classList.add("active");
    body.classList.add("noscroll");

    // Modal Triger Close Button
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      body.classList.remove("noscroll");
    });
  });
}

/* */

/* ACTIONS */

modalTriggers.forEach((modalTrigger) => enableModalTrigger(modalTrigger));
