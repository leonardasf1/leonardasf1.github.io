//lightbox alternative
function v(id) { return document.querySelector(id) }
function lb_show() { v('#lightbox').classList.add('lb_show') }
function lb_hide() { v('#lightbox').classList.replace('lb_show', 'lb_hide') }
function lb_rem() { v('#lightbox').remove() }

let lb_data = document.querySelectorAll('[data-lightbox]');
const import_img_url = "http://leonardasf1.narod.ru/";

for(let i in lb_data) {

  lb_data[i].addEventListener('click', function(e) {
  	e.preventDefault();
  	let target_i = i;
  	document.body.insertAdjacentHTML('beforeend', 
		`<div id="lightbox" >
			<div id="background_lb_remove"></div>
			<img id="lb_img" src="../icons/loading.gif" />
			<a id="lb_btn_prev"></a>
			<a id="lb_btn_next"></a>
		</div>`);
  	lb_show();
	  v('#lb_img').src = `${import_img_url + lb_data[i].getAttribute('href')}`;

  	v('#lb_btn_prev').addEventListener('click', () => {
	  	v('#lb_img').src = "../icons/loading.gif";
			v('#lb_img').src = `${import_img_url + lb_data[--i].getAttribute('href')}`;
		});
  	v('#lb_btn_next').addEventListener('click', () => {
  		v('#lb_img').src = "../icons/loading.gif";
			v('#lb_img').src = `${import_img_url + lb_data[++i].getAttribute('href')}`;
		});
		v('#background_lb_remove').addEventListener('click', () => {
			lb_hide();
			setTimeout(lb_rem, 400);
			i = target_i;
		});
  });
}

// + : zoom, lb_btn_x, albums