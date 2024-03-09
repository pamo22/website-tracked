/*var autoloads = ["projectpreview.js", "headercomponent.js", "footercomponent.js", "gitbutton.js"];
var array_length = autoloads.length;
for (var i = 0; i < array_length; i++) {
    let script = document.createElement('script');
    script.src = "/js/" + autoloads[i];
    document.getElementById("endanchor").append(script);
    console.log(autoloads[i]);
    //Do something
}
*/
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

customElements.define('project-preview', ProjectPreview)

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.getAttribute('title');
    let dir = this.getAttribute('dir');
    let slash = "/";
    let titlehtml = "";
    if (title == null) {
      title = "";
      slash = "";
    } else {
      titlehtml = '<a href="/pages/' + title + '.html">' + title+ '</a>';
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
                <a href="/" class="font-bold">Home`+slash+`</a>`+dir+slash+titlehtml +`
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

customElements.define('git-button', GitButton)

class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let date = new Date().getFullYear()
   this.innerHTML = `
   <span class="text-xs text-zinc-400 inline-block w-[100vw] italic text-center">© Oscar Coghlan `+date+`</span>
    `;
  }
}

customElements.define('footer-component', FooterComponent)