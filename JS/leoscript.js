// Document.head.createElement(‘script’); src


var v = function (id) {return document.querySelector(id)}

$(function() {

    v("#headerMenu").insertAdjacentHTML('beforeend', 
       `<div class="home slide"><a><img src="../icons/favicon.ico"></a></div>
   <!--     <div><a href="../F1_Challenge/" title="formula 1"><img src="../icons/f1.png"></a></div>
        <div><a href="../Alpinism/" title="alpinisme"><img src="../icons/alpinism.png"></a></div>
        <div><a href="../sailing/" title="sailing"><img src="../icons/sailing.png"></a></div>
        <div><a href="../flamenco/" title="flamenco"><img src="../icons/flamenco.png"></a></div>
        <div><a href="../13vek.html" title="medieval"><img src="../icons/medieval.png"></a></div>
        <div><a href="../zdorovie/">Здоровье</a></div>
   -->     <div><div class="item"><a href="../Skateboard">Лонгборд</a></div></div>
        <div>
            <div class="item"><a href="../programming/">programming</a></div>
            <div class="submenu">
<a href="../programming/html.html">HTML</a>
<a href="../programming/css.html">CSS</a>
<a href="../programming/bootstrap.html">Bootstrap</a>
<a href="../programming/javascript.html">JavaScript</a>
<a href="../programming/jquery.html">jQuery</a>
<a href="../programming/webpack.html">webpack</a>
<a href="../programming/angular.html">Angular</a>
<a href="../programming/react.html">React</a>
<a href="../programming/vue.html">Vue.js</a>
<a href="../programming/php.html">php</a>
<a href="../programming/python.html">python</a>
            </div>
        </div>
        <div><div class="item"><a href="../Surf/">Серфинг</a></div></div>
   <!--     <div>
            <div class="item">старье</div>
            <div class="submenu">
<a href="../games.html">Games</a>
<a href="../guitar.html">Guitar</a>
<a href="../karting.html">Karting</a>
<a href="../upgrade.html">Upgrade</a>
<a href="../zametki.html">Заметки</a>
<a href="../nu/">nu</a>
            </div>
        </div> -->`
    );
});

window.onscroll = function () {
    var scrolled = $(this).scrollTop();

    if( scrolled > 50 ) {
        headerMenu.style.padding = "2px 3%";
    }
    if( scrolled < 51 ) {
        headerMenu.style.padding = "31px 3%";
    }
    if( scrolled > 1200 ) {
        footerScrollTop.style.right = "22px";
    }
    if( scrolled < 1000 ) {
        footerScrollTop.style.right = "-52px";
    }
};

window.onload = function (){

    $("article a, #links a").attr("target", "_blank");

    v("body").insertAdjacentHTML('beforeend', 
       `<div id="footerScrollTop">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
            </svg>
        </div>`
    );

    $(".item").click(function() {
        $(this).next().slideToggle(500);
    });
    $('.submenu').mouseleave(function() {
        $(this).slideUp(500);
    });

    $(".slide").click(function() {
         $(this).nextAll().slideToggle(500);
    });

    $('#footerScrollTop').on("click", function () {
        $(window).scrollTop("0");
    });

    let lastMod = document.lastModified;

    v('footer').insertAdjacentHTML('beforeend', `<div>${lastMod} </div>`);
}
