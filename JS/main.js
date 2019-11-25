
(function() {
  setHeader();
  setContentFn();
  setFooterScrollTop();
  setFooter();
})();

function q(id) { return document.querySelector(id) }
function qAll(id) { return document.querySelectorAll(id) }

function setHeader() {
  fetch("../JS/header.html")
  .then(response => response.text())
  .then(header => q('#headerMenu').insertAdjacentHTML('beforeend', header))
  .then(() => window.addEventListener( "scroll", () => {
    if (this.scrollY > 50) q('#headerMenu').style.height = '56px';
    if (this.scrollY < 51) q('#headerMenu').style.height = '95px';
  }))
  .then(() => qAll('.item').forEach(
    i => i.onclick = function() {
      this.nextElementSibling.classList.toggle('slideT');
      this.nextElementSibling.addEventListener("mouseleave", function () {
        this.classList.remove('slideT');
      });
    }
  ));
}

function setContentFn() {

  if (q('details')) qAll("details").forEach(
    i => i.ontoggle = function() {this.firstChild.classList.toggle('hover')});

  qAll('a[href*="://"]').forEach(
    link => link.setAttribute("target", "_blank"));

  if (q('.import_Img')) qAll('.import_Img img[src^=".."]').forEach(
    img => img.src = `http://leonardasf1.narod.ru/${img.getAttribute('src')}`);

  if (q('code')) qAll('code').forEach(
    block => hljs.highlightBlock(block));
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
    if (this.scrollY > 1200) q('#footerScrollTop').style.right = "22px";
    if (this.scrollY < 1000) q('#footerScrollTop').style.right = "-52px";
  });
}

function setFooter() {
  q('footer').insertAdjacentHTML(
    'beforeend', `<div>${document.lastModified} </div>`);
}

function load(page) {
  fetch(page)
  .then(response => response.text())
  .then(results => {
    q('content').innerHTML = results;
    setTitle();
    setContentFn();
  })
  .catch(err => alert(err));
}

function setTitle() {
  q('title').innerText = q('#pageTitle').innerHTML;
  q('#headerMenu>div').innerHTML = q('#headerTitle').innerHTML;
}
