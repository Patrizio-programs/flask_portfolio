class Headerjs extends HTMLElement {
  constructor() {
    super();
    const h1 = document.createElement("h1");
    h1.textContent = `Hello,`;
    this.appendChild(h1);
  }
}

customElements.define("headerjs", Header);
