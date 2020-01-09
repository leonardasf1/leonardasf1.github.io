import { lb_init } from "./lb.js";

  setHeader();
window.addEventListener("DOMContentLoaded", function() {
  setContentFn();
  setFooterScrollTop();
  setFooter();
});

function q(id) { return document.querySelector(id) }
function qAll(id) { return document.querySelectorAll(id) }
const import_DataUrl = "http://leonardasf1.narod.ru/";

function setHeader() {
  fetch("../JS/header.html")
  .then(response => response.text())
  .then(header => q('#headerMenu').insertAdjacentHTML('beforeend', header))
  .then(() => window.addEventListener( "scroll", () => {
    if (window.scrollY > 50) q('#headerMenu').style.height = '42px';
    if (window.scrollY < 51) q('#headerMenu').style.height = '95px';}))
  .then(() => qAll('.headerLink').forEach(
    a => a.onclick = function() { load(this) }));
}

function setContentFn() {

  if (q('details')) qAll("details").forEach(
    i => i.ontoggle = function() {
      this.firstElementChild.classList.toggle('hover')});

  qAll('a[href*="://"]').forEach(
    link => link.setAttribute("target", "_blank"));

  if (q('code')) qAll('code').forEach(
    block => hljs.highlightBlock(block));

  if (q('.navLink')) qAll('.navLink').forEach(
    a => a.onclick = function() { load(this) });

  if (q('.import_Data')) {
    qAll('.import_Data *[src^=".."]').forEach(
    i => i.src = `${import_DataUrl + i.getAttribute('src')}`);
    qAll('.import_Data *[href^=".."]').forEach(
    i => i.href = `${import_DataUrl + i.getAttribute('href')}`);
  }

  if (q('[data-lightbox]')) lb_init();

  // if (q('.lazy')) {
  //   qAll('.lazy img').forEach(i => {
  //     i.setAttribute("data-src", i.getAttribute("src"));
  //     i.removeAttribute("src");
  //     i.classList.add('lazyload');
  //   });
  //   // q('body').insertAdjacentHTML(
  //   // 'beforeend', `<script src="../JS/lazysizes.min.js" async=""></script>`);
  // };
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

function load(a) {
  a.style.opacity = 0;
  q('#headerMenu').prepend(a);
  q('main').style.opacity = 0;
  fetch(`${a.textContent.toLowerCase()}.html`)
  .then(response => response.text())
  .then(results => {
    q('main').innerHTML = results;
    q('title').innerText = q('#pageTitle').innerHTML;
    setContentFn();
    a.style.opacity = 1;
    q('main').style.opacity = 1;
  });
}