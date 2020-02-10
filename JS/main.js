import { lb_init } from "./lb.js";

if (location.hash) loadSubPage();
setHeader();

window.addEventListener("DOMContentLoaded", function() {
  setContentFn();
  setFooterScrollTop();
  setFooter();
  // registerSW();
});

function q(id) { return document.querySelector(id) }
function qAll(id) { return document.querySelectorAll(id) }
const import_DataUrl = "http://leonardasf1.narod.ru/";

function setHeader() {
  fetch("../JS/header.html")
  .then(response => response.text())
  .then(header => q('#headerMenu').insertAdjacentHTML('beforeend', header))
  .then(() => window.addEventListener( "scroll", () => {
    if (window.scrollY > 50) q('#headerMenu').style.height = '48px';
    if (window.scrollY < 51) q('#headerMenu').style.height = '95px';}));
}

function setContentFn() {

  window.addEventListener('hashchange', loadSubPage);

  if (q('.import_Data')) {
    qAll('.import_Data *[src^=".."]').forEach(
    i => i.src = `${import_DataUrl + i.getAttribute('src')}`);
    qAll('.import_Data *[href^=".."]').forEach(
    i => i.href = `${import_DataUrl + i.getAttribute('href')}`);
  }

  if (q('details')) qAll("details").forEach(
    i => i.ontoggle = function() {
      this.firstElementChild.classList.toggle('darker')});

  qAll('a[href*="://"]').forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  if (q('code')) qAll('code').forEach(
    block => hljs.highlightBlock(block));

  if (q('[data-lightbox]')) lb_init();

  if (q('.lazy')) {
    qAll('.lazy img').forEach(i => {
      i.setAttribute("data-src", i.getAttribute("src"));
      i.removeAttribute("src");
      i.classList.add('lazyload');
    });
  };
}

function setFooterScrollTop() {
  q("body").insertAdjacentHTML('beforeend',
    `<div id="footerScrollTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
      </svg>
    </div>`
  );
  q('#footerScrollTop').addEventListener(
    "click", () => window.scroll(0, 0));

  window.addEventListener( "scroll", () => {
    if (window.scrollY > 1200) q('#footerScrollTop').style.right = "22px";
    if (window.scrollY < 1000) q('#footerScrollTop').style.right = "-52px";
  });
}

function setFooter() {
  q('footer').insertAdjacentHTML(
    'beforeend', `<div>${document.lastModified} </div>`);
}

function loadSubPage() {
if (location.hash) {
  q('main').style.opacity = 0;
  fetch(`${location.hash.substr(1)}.html`)
  .then(response => response.text())
  .then(results => {
    q('main').innerHTML = results;
    q('title').innerText = q('#pageTitle').textContent;

    if (q('#pageLogo')) {
      let a = q('#pageLogo > a');
      a.style.opacity = 0;
      q('#headerMenu').prepend(a);
      a.style.opacity = 1;
    };

    setContentFn();
    q('main').style.opacity = 1;
  });
} else {location.reload()}
}

// function registerSW() {
//   if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../JS/sw.js');
//   }
// }