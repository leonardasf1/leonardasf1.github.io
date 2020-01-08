//lightbox alternative
function q(id) { return document.querySelector(id) }

let lb_data;
let lb_img;

export function lb_init() {
  lb_data = document.querySelectorAll('[data-lightbox]');
  for (let i = 0; i < lb_data.length; i++) {
    lb_data[i].onclick = function(e) {
      e.preventDefault();
      lb_img = i;
      document.body.insertAdjacentHTML('beforeend',
        `<div id="lightbox" >
        <div id="background_lb_remove"></div>
        <img id="lb_img" src="" />
        <a id="lb_btn_prev"></a>
        <a id="lb_btn_next"></a>
      </div>`);
      q('#lightbox').classList.add('lb_show');
      lb_setImg(i);
      q('#lb_btn_prev').addEventListener('click', lb_prev);
      q('#lb_btn_next').addEventListener('click', lb_next);
      q('#background_lb_remove').addEventListener('click', lb_close);
    }
  }
}
function lb_setImg(n) {
    q('#lb_img').src = "../icons/loading.gif";
    q('#lb_img').src = `${lb_data[n].getAttribute('href')}`;
}
function lb_prev() {lb_setImg(--lb_img)}
function lb_next() {lb_setImg(++lb_img)}
function lb_close() {
    q('#lightbox').classList.replace('lb_show', 'lb_hide');
    setTimeout(() => { q('#lightbox').remove() }, 400);
}
// + : zoom, lb_btn_x, albums