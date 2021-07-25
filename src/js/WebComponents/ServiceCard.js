class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `${this.getAttribute("name")}`;
  }
}
window.customElements.define("custom-card", CustomCard);
