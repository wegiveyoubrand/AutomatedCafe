const Modal = document.querySelector(".modal"),
  ModalComponent = document.querySelector("modal-component"),
  modalContent = document.querySelector(".modal-content"),
  ModalClose = document.querySelector(".modal-close"),
  main = document.querySelector("main"),
  services = document.querySelectorAll(".portal");

ModalClose.addEventListener("click", (e) => {
  e.preventDefault;
  Modal.classList.remove("open");
  main.classList.remove("fixed");
});

const ModalIsActive = function () {
  Modal.classList.add("open");
  main.classList.add("fixed");
};

services.forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault;
    if (service.getAttribute("data-name") !== null) {
      console.log(service.getAttribute("data-name"));
      let dataAttribute = service.getAttribute("data-name"),
        lowerData;
      ModalIsActive();

      if (dataAttribute !== "") {
        lowerData = dataAttribute.toLowerCase();

        if (lowerData == "computer services") {
          modalContent.innerHTML = ComputerServicesContent;
        } else if (lowerData == "airtime and data") {
          modalContent.innerHTML = AirtimeandData;
        } else if (lowerData == "online payment") {
          modalContent.innerHTML = OnlinePayment;
          const RRRNumber = document.querySelector("#RRRNumber");

          const PayRemitta = document.querySelector("#pay-remita");

          RRRNumber.addEventListener("input", (e) =>
            console.log(e.target.value)
          );

          console.log(PayRemitta);
          PayRemitta.addEventListener("click", (event) => {
            if (RRRNumber.value.length == 12) {
              let PayLocation = `https://login.remita.net/remita/onepage/biller/${RRRNumber.value}/payment.spa`;
              event.preventDefault;
              location.href = PayLocation;
            } else {
              alert("error");
            }
          });
        } else {
          alert("error");
          modalContent.innerHTML = "";
        }
      }
    }
  });
});

// Set Modal Content
const ComputerServicesContent = `Hello Computer Services`;
const AirtimeandData = `<div class="form-container">
<form name='Online-Pay'>
    <div class="form-group">
      <label>Enter mobile number</label>
      <input type="text">
    </div>
    <button>Continue</button>
  </form>
</div>
`;
const OnlinePayment = `
  <div class ="form-container">
    <form name="RemitaPay" action= "/">
      <div class="form-group " >
        <select disabled>
          <option selected>Remita</option>
          <option>eTranzact</option>
          <option>Bank Transfer</option>
        </select>
      </div>
      <div class="form-group">

        <input type="text" placeholder="Enter RRR number" name="RRR" id="RRRNumber">
      </div>
      <button type="button" id= "pay-remita">Pay Remita</button>

    </form>
  </div>
`;
