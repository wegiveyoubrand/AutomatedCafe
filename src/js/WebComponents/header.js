class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
        <c-brand>${this.getAttribute("name")}</c-brand>
            <nav>
                <ul>
                    <li><a href="./services.html">Sign up</a></li>
                </ul>
            </nav>
        `;
  }
}
window.customElements.define("c-header", Header);
