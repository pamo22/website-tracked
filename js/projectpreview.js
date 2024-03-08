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
        <div class="relative min-h-40 rounded-lg">
          <div class="">
            <div class="z-10 m-4  bg-white bg-opacity-80 min-h-40 relative">
              <h3 class="text-2xl relative font-comfortaa z-10">` + title + `</h3>
              <p class="text-justify z-10">` + content + `</p>
            </div>
          </div>
          <div class="overflow-hidden w-full h-full absolute top-0">
            <img class="absolute top-0 -z-0" src="` + image + `" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('project-preview', ProjectPreview);