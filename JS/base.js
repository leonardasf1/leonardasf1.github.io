import { headerMenuB } from "./header.js";


function v(id) {return document.querySelector(id);};
function vall(id) {return document.querySelectorAll(id);};

v('#headerMenu').insertAdjacentHTML('beforeend', headerMenuB);


v("body").insertAdjacentHTML('beforeend', 
   `<div id="footerScrollTop">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
        </svg>
    </div>`
);
window.onscroll = function () {
    let scrolled = this.scrollY;
    if (scrolled > 50) {
        headerMenu.style.height = '56px';
    }
    if (scrolled < 51) {
        headerMenu.style.height = '95px';
    }
    if (scrolled > 1200) {
        footerScrollTop.style.right = "22px";
    }
    if (scrolled < 1000) {
        footerScrollTop.style.right = "-52px";
    }
};


    // $(".homeSlide").click(function () {
    //      $(this).nextAll().slideToggle(500);
    // });

footerScrollTop.addEventListener("click", () => window.scroll(0, 0));

v('footer').insertAdjacentHTML('beforeend', `<div>${document.lastModified} </div>`);

if (v('details')) {
  for (let i in vall("details")) {
      vall('details')[i].ontoggle = function () {
          this.firstChild.classList.toggle('hover');
      }
  };
}

for (let i in vall('.item')) {
  if ((typeof vall('.item')[i]) == 'object') {
    vall('.item')[i].onclick = function () {
        this.nextElementSibling.classList.toggle('slideT');
        this.nextElementSibling.addEventListener("mouseleave", function () {
            this.classList.remove('slideT');
        });
    }
  }
};

vall('a[href*="://"]').forEach(
    link => link.setAttribute("target", "_blank"));