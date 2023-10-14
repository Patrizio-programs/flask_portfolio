class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.textContent = "Hello fren!";
  }
}

customElements.define("hello-world", HelloWorld);
