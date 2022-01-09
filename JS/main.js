import { lb_init } from "./lb.js";
import { footer } from './footer.js'

if (location.hash) loadSubPage();
setHeader();

window.addEventListener('hashchange', loadSubPage);
window.addEventListener("DOMContentLoaded", function() {
  setFooter();
  setContentFn();
  setFooterScrollTop();
  // registerSW();
});

function q(id) { return document.querySelector(id) }
function qAll(id) { return document.querySelectorAll(id) }
const import_DataUrl = "https://leonardasf1.narod.ru/";

let headHeight = '95px';

function setHeader() {
  // fetch("../JS/header.html")
  // .then(response => response.text())
  // .then(header => q('#headerMenu').insertAdjacentHTML('beforeend', header))
  // .then(() =>
  // qAll('.item').forEach(i => i.parentNode.addEventListener("mouseover",
  //   () => { i.nextElementSibling.style.display = "block";}));
  function nextShow(i) {
    i.nextElementSibling.style.display = "block";
  }
  function nextHide(i) {
    i.nextElementSibling.style.display = "none";
  }

  qAll('.item').forEach(i => {
    i.parentNode.addEventListener("mouseover", () => nextShow(i));
    i.parentNode.addEventListener("mouseout", () => nextHide(i));
    window.addEventListener('hashchange', () => {
      let t = q('.headBarTouch');
      nextHide(i); if (t) t.classList.remove('headBarTouch');
    });
    i.addEventListener("touchstart", () => {
      let t = q('.headBarTouch');
      if (t) { nextHide(t); t.classList.remove('headBarTouch');
      } else { nextShow(i); i.classList.add('headBarTouch');}
    }, false);
  });

  window.addEventListener( "scroll", () => {
    if (window.scrollY > 50) headHeight = '48px';
    if (window.scrollY < 51) headHeight = '95px';
    q('#headerMenu').style.height = headHeight;
    q('#headerBar').style.top = headHeight;
    qAll('#headerMenu .item~*').forEach(i => i.style.top = headHeight);
  });

  if (q('#headerBar_toggle')) {
    q('#headerBar_toggle').addEventListener("touchstart", () => {
      q('#headerBar').classList.toggle('show');
      q('#headerBar').style.top = headHeight;
    });
  }
}

function setContentFn() {

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
    'beforeend', footer);
}

function loadSubPage() {
  if (q('.show')) {
    q('#headerBar').classList.remove('show')
  }
  if (location.hash) {
    fetch(`${location.hash.substr(1)}.html`)
    .then(response => response.text())
    .then(results => {
      q('main').innerHTML = results;
      q('title').innerText = q('#pageTitle').textContent;

      let a;
      if (q('#pageLogo')) {
        a = q('#pageLogo > a').innerHTML
      } else a = q('#pageTitle').textContent;
      q('#headerMenu > div:nth-child(2)').innerHTML = a;

      setContentFn();
    });
  } else {location.reload()}
}

// function registerSW() {
//   if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../JS/sw.js');
//   }
// }