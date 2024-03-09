class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let date = new Date().getFullYear()
   this.innerHTML = `
   <br><br>
   <span class="text-xs text-zinc-400 inline-block w-[100vw] italic text-center">© Oscar Coghlan `+date+`</span>
    `;
  }
}

customElements.define('footer-component', FooterComponent);