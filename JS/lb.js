//lightbox alternative
function q(id) { return document.querySelector(id) }
function qAll(id) { return document.querySelectorAll(id) }

let lb_album;
let lb_thisIndex;

export function lb_init() {
  qAll('[data-lightbox]').forEach(i => {
    i.onclick = function(e) {
      e.preventDefault();
      lb_setHTML();
      lb_album = qAll(`
        [data-lightbox="${this.getAttribute("data-lightbox")}"]`);
      lb_album.forEach((elem, index, array) => {
        if (elem.outerHTML == this.outerHTML)
        lb_thisIndex = +index;
      });
      lb_setImg(lb_thisIndex);
      q('#lb_btn_prev').addEventListener('click', lb_prev);
      q('#lb_btn_next').addEventListener('click', lb_next);
      q('#lb_btn_close').addEventListener('click', lb_close);
      q('#background_lb_remove').addEventListener('click', lb_close);
    };
  });
}

function lb_setHTML() {
  document.body.insertAdjacentHTML('beforeend',
    `<div id="lightbox" >
      <div id="background_lb_remove"></div>
      <img id="lb_img" src="" />
      <a id="lb_btn_prev"></a>
      <a id="lb_btn_next"></a>
      <a id="lb_btn_close"></a>
      <div id="lb_info">
        <a id="lb_zoom" href="" target="_blank" rel="noopener noreferrer">+</a>
        <div id="lb_count"></div>
        <div id="lb_attrTitle"></div>
      </div>
    </div>`);
  q('#lightbox').classList.add('lb_show');
}

function lb_setImg(n) {
  q('#lb_img').src = "../icons/loader.svg";

  if (n <= 0) {q('#lb_btn_prev').style.display = "none"}
  else {q('#lb_btn_prev').style.display = "block"};
  if (!lb_album[n + 1]) {q('#lb_btn_next').style.display = "none"}
  else {q('#lb_btn_next').style.display = "block"};

  q('#lb_img').src = lb_album[n].href;

  lb_getInfo(n);
}

function lb_prev() {lb_setImg(--lb_thisIndex)}
function lb_next() {lb_setImg(++lb_thisIndex)}
function lb_close() {
  q('#lightbox').classList.replace('lb_show', 'lb_hide');
  setTimeout(() => { q('#lightbox').remove() }, 400);
}

function lb_getInfo(n) {
  let attrTitle = lb_album[n].getAttribute('data-title');
  if (attrTitle) q('#lb_attrTitle').innerHTML = attrTitle
  else q('#lb_attrTitle').innerHTML = "";
  q('#lb_count').innerHTML = 
  `${n + 1} of ${lb_album.length}`;
  q('#lb_zoom').href = q('#lb_img').src;
}
// mobile