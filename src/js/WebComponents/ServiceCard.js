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
      <div class="question">
        ${this.getAttribute("question")} 
       
      </div>
      <div class="answer">
      ${this.getAttribute("answer")} 

      </div>
   `;
  }
}

window.customElements.define("custom-card", CustomCard);
window.customElements.define("faq-card", FAQCard);
