
$(function() {

    $('header>div:first-child').addClass('menu');

    $(".menu").append(
      '<div class="logo"><img src="logo.svg"></div>'
    + '<div class="slide"><a><img src=""></a></div>'
+ '<div><a class="item" href="#">men</a>'
  + '<div><div><a href="#">snowboards</a></div>'
    + '<div><a href="#">bindings</a></div>'
    + '<div><a href="#">boots</a></div>'
    + '<div><a href="#">jackets</a></div>'
    + '<div><a href="#">pants</a></div>'
    + '<div><a href="#">apparel</a></div>'
    + '<div><a href="#">headwear</a></div>'
    + '<div><a href="#">firstlayer</a></div></div></div>'
+ '<div><a class="item" href="#">women</a>'
  + '<div><div><a href="#">snowboards</a></div>'
    + '<div><a href="#">bindings</a></div>'
    + '<div><a href="#">boots</a></div>'
    + '<div><a href="#">jackets</a></div>'
    + '<div><a href="#">pants</a></div>'
    + '<div><a href="#">apparel</a></div>'
    + '<div><a href="#">headwear</a></div></div></div>'
+ '<div><a class="item" href="#">kids</a>'
  + '<div><div><a href="#">snowboards</a></div>'
    + '<div><a href="#">bindings</a></div>'
    + '<div><a href="#">boots</a></div></div></div>'
+ '<div><a href="#">gloves</a></div>'
+ '<div><a class="item" href="#">bags</a>'
  + '<div><div><a href="#">urban collection</a></div>'
    + '<div><a href="#">daypack collection</a></div>'
    + '<div><a href="#">outdoor collection</a></div></div></div>'
+ '<div><a class="item" href="#">company</a>'
  + '<div><div><a href="#">distributors</a></div>'
    + '<div><a href="#">dealer locator</a></div>'
    + '<div><a href="#">binding manual</a></div>'
    + '<div><a href="#">28 winters</a></div>'
    + '<div><a href="#">online store canada</a></div></div></div>'
+ '<div><a href="#">team</a></div>'
+ '<div><a href="#">sustainability</a></div>'
+ '<div><a class="item" href="#">english</a>'
  + '<div><div><a href="#">deutsch</a></div>'
    + '<div><a href="#">français</a></div>'
    + '<div><a href="#">italiano</a></div>'
    + '<div><a href="#">español</a></div>'
    + '<div><a href="#">Čeština</a></div></div></div>'
+ '<div id="soc"><a href="#"><img src="insta.svg" alt="" /></a>'
    + '<a href="#"><img src="youtu.svg" alt="" /></a>'
    + '<a href="#"><img src="" alt="" /></a>'
    + '<a href="#"><img src="" alt="" /></a>'
    + '<a href="#"><img src="" alt="" /></a></div>'
    );

    $("body").append('<div id="footer-scroll-top"><img src="v.svg" alt="" /></div>')

    $(".menu>div").mouseover(function() {
        $(this).find(".item").next().show();
    });

    $(".menu>div").mouseout(function() {
        $(this).find(".item").next().hide();
    });

    $(".slide").click(function() {
        $(this).nextAll().slideToggle(500);
    });

    $('#footer-scroll-top').on("click", function () {
        $(window).scrollTop("0");
    });

});

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 50 ) {
        $('.menu').addClass('scrolled');
    }   
    if( scrolled < 51 ) {     
        $('.menu').removeClass('scrolled');
    }
    if( scrolled > 1200 ) {
        $('#footer-scroll-top').css({"right":"22px"});
    }
    if( scrolled < 1000 ) {
        $('#footer-scroll-top').css({"right":"-52px"});
    }
});
