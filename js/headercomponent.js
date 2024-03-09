class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.getAttribute('title');
    let dir = this.getAttribute('dir');
    let slash = "/";
    if (title == null) {
      title = "";
      slash = "";
    }
    if (dir == null) {
      dir = "";
    }
   this.innerHTML = `
      <span class="absolute w-full">
        <header class="h-20 text-2xl lg:w-9/12 xl:w-7/12 w-11/12 mx-auto table">
          <span class="font-comfortaa py-3 align-middle table-cell">
            <span class="grid grid-cols-2">
              <span>
                <a href="/" class="font-bold">Home`+slash+`</a>`+dir+slash+`<a href="/pages/`+title+`.html">`+title+`</a>
              </span>
              <span class="font-bold text-right">
                <a href="https://google.com">Résumé</a>
              </span>
            </span>
          </span>
        </header>
      </span>
    `;
  }
}

customElements.define('header-component', HeaderComponent);