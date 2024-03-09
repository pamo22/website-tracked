class GitButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let link = this.getAttribute('link');
    let text = this.getAttribute('text');
    let image = this.getAttribute('image');
    this.innerHTML = `
    <div class="grid justify-center">
      <a href="` + link + `">
        <div class=" mx-6 transition-all ease-in-out duration-300 whitespace-nowrap">
          <div class="flex items-center space-x-2 hover:bg-zinc-200 p-4 rounded-md border-1 border-zinc-300">
            <div class="w-8 h-8">
              <img class="w-full h-full" src="` + image + `" alt="` + text + `" />
            </div>
            <div class="text-black text-2xl">` + text + `</div>
          </div>
        </div>
      </a>
    </div>
    `;
  }
}

customElements.define('git-button', GitButton);