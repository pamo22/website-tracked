class ProjectPreview extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.getAttribute('title');
    let content = this.getAttribute('content');
    let image = this.getAttribute('image');
    this.innerHTML = `
      <div class="mt-10 border-2 border-zinc-100 shadow hover:shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">

        <img src="images/` + image + `" alt="`+title+`" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">`+title+`</h3>
          <p class="text-base text-gray-500">`+content+`</p>
        </div>
      </div>
    `;
  }
}

customElements.define('project-preview', ProjectPreview);