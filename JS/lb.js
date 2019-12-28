//lightbox alternative
function q(id) { return document.querySelector(id) }
function lb_rem() { q('#lightbox').remove() }

let lb_data = document.querySelectorAll('[data-lightbox]');
const import_img_url = "http://leonardasf1.narod.ru/";
let lb_img;

export function lb_init() {
  for (let i = 0; i < lb_data.length; i++) {
    lb_data[i].onclick = function(e) {
      e.preventDefault();
      lb_img = i;
      document.body.insertAdjacentHTML('beforeend',
        `<div id="lightbox" >
				<div id="background_lb_remove"></div>
				<img id="lb_img" src="../icons/loading.gif" />
				<a id="lb_btn_prev"></a>
				<a id="lb_btn_next"></a>
			</div>`);
      q('#lightbox').classList.add('lb_show');
      q('#lb_img').src = `${import_img_url + lb_data[i].getAttribute('href')}`;
      lb_prevAddEv();
      lb_nextAddEv();
      lb_closeAddEv();
    }
  }
}
function lb_prevAddEv() {
  q('#lb_btn_prev').addEventListener('click', () => {
    q('#lb_img').src = "../icons/loading.gif";
    q('#lb_img').src = `${import_img_url + lb_data[--lb_img].getAttribute('href')}`;
  });
}
function lb_nextAddEv() {
	q('#lb_btn_next').addEventListener('click', () => {
    q('#lb_img').src = "../icons/loading.gif";
    q('#lb_img').src = `${import_img_url + lb_data[++lb_img].getAttribute('href')}`;
  });
}
function lb_closeAddEv() {
  q('#background_lb_remove').addEventListener('click', () => {
    q('#lightbox').classList.replace('lb_show', 'lb_hide');
    setTimeout(lb_rem, 400);
  });
}
// + : zoom, lb_btn_x, albums