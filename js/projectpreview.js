class ProjectPreview extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.getAttribute('title');
    let content = this.getAttribute('content');
    let image = this.getAttribute('image');
    this.innerHTML = `
      <div class="m-3 mt-12 w-[100%]">
        <div class="relative min-h-40 rounded-lg border-separate ">
          <div class="grid">
            <div class="z-10 p-4">
              <h3 class="text-2xl relative font-comfortaa z-10">` + title + `</h3>
              <p class="text-justify z-10 relative">` + content + `</p>
            </div>
          </div>
          <div class="overflow-hidden w-full h-full absolute top-0">
            <img class="absolute top-0 -z-0 opacity-40" src="` + image + `" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('project-preview', ProjectPreview);