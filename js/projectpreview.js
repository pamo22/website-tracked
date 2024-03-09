class ProjectPreview extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.getAttribute('title');
    let content = this.getAttribute('content');
    let image = this.getAttribute('image');
    let filter = this.getAttribute('filter');
    this.innerHTML = `
    <a href="/pages/`+title+`.html">
      <div class="mt-10 border-1 border-zinc-100 shadow hover:shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">

        <img src="images/` + image + `" alt="`+title+` thumbnail image" class="w-full h-48 object-cover `+filter+`">
        <div class="p-4">
          <h1 class="font-comfortaa text-2xl font-bold text-gray-900 mb-2">`+title+`</h3>
          <p class="font-cantarell text-base text-gray-500 line-clamp-2 min-h-[48px]">`+content+`</p>
        </div>
      </div>
    </a>
    `;
  }
}

customElements.define('project-preview', ProjectPreview);