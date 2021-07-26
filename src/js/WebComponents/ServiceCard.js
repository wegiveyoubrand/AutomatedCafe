class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `${this.getAttribute("name")}`;
  }
}
class FAQCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
      <div class="label">
        ${this.getAttribute("question")} 
       
      </div>
      <div class="content">
     
        <div>
          <p> ${this.getAttribute("answer")} </p>
        </div>
      </div>
   `;
  }
}

window.customElements.define("custom-card", CustomCard);
window.customElements.define("faq-card", FAQCard);
