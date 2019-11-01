

function v(id) { return document.querySelector(id) }
function vall(id) { return document.querySelectorAll(id) }

function load(page) {
  fetch(page)
    .then(response => response.text())
    .then(results => v('content').innerHTML = results)
    .then(results => contentFunc());
}

function contentFunc() {
  v('title').innerText = pageTitle.innerHTML;
  v('#headerMenu>div').innerHTML = headerTitle.innerHTML;
      // links.innerHTML = page.links;

  if (v('details')) {
    for (let i of vall("details")) {
      i.ontoggle = function () {
        this.firstChild.classList.toggle('hover');
      }
    }
  }
  vall('a[href*="://"]').forEach(
    link => link.setAttribute("target", "_blank"));

  vall('.import_Img img[src^=".."]').forEach(
    img => img.src = `http://leonardasf1.narod.ru/${img.getAttribute('src')}`);
}

headerMenu.insertAdjacentHTML('beforeend', 
       `<div id="homeSlide"><a><img src="icons/favicon.ico"></a></div>
   <!--     <div><a href="F1_Challenge/" title="formula 1"><img src="icons/f1.png"></a></div>
        <div><a href="Alpinism/" title="alpinisme"><img src="icons/alpinism.png"></a></div>
        <div><a href="sailing/" title="sailing"><img src="icons/sailing.png"></a></div>
        <div><a href="flamenco/" title="flamenco"><img src="icons/flamenco.png"></a></div>
        <div><a href="13vek.html" title="medieval"><img src="icons/medieval.png"></a></div>
        <div><a href="zdorovie/">Здоровье</a></div>
   -->     <div>
            <div class="item"><a href="programming/">programming</a></div>
            <div class="submenu">
<a href="programming/html.html">HTML</a>
<a href="programming/css.html">CSS</a>
<a href="programming/bootstrap.html">Bootstrap</a>
<a href="programming/javascript.html">JavaScript</a>
<a href="programming/jquery.html">jQuery</a>
<a href="programming/webpack.html">webpack</a>
<a href="programming/angular.html">Angular</a>
<a href="programming/react.html">React</a>
<a href="programming/vue.html">Vue.js</a>
<a href="programming/php.html">php</a>
<a href="programming/python.html">python</a>
            </div>
        </div>
        <div><div class="item"><a onclick="load('Surf/i.html')">Серфинг</a></div></div>
        <div><div class="item"><a onclick="load(Skateboard/)">Лонгборд</a></div></div> `
//         <div>
//             <div class="item">старье</div>
//             <div class="submenu">
// <a href="games.html">Games</a>
// <a href="guitar.html">Guitar</a>
// <a href="karting.html">Karting</a>
// <a href="upgrade.html">Upgrade</a>
// <a href="zametki.html">Заметки</a>
// <a href="nu/">nu</a>
//             </div>
//         </div>
);
