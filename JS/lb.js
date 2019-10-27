//lightbox alternative

let lb_Obj = new Object();

for(let i of document.querySelectorAll('[data-lightbox]')) {
  lb_Obj['lb_Arr' + i.dataset.lightbox] += i;
  i.addEventListener('click', function () {
  	this.preventDefault();
  	this.
  })
}


// let album_Name = Object.keys(lb_Obj)[1];
// lb_Obj.album_Name
// Object.keys(lb_Obj) // массив имен массивов
// lb_Obj[Object.keys(lb_Obj)[1]] // album
//   	e.getAttribute('href');
//   	e.dataset.title;
//   	indexOf(e);
//   	e++;
//   	e--;