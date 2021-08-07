function getInputValue() {
  const RRRNumber = document.querySelector("#RRRNumber").value;

  location.href = `https://login.remita.net/remita/onepage/biller/${RRRNumber}/payment.spa`;
}
