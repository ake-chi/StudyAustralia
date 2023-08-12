$(window).scroll(function () {
    var $navBg = $(".nav-bg");
    var scroll = $(window).scrollTop();
  
    if (scroll >= 50) {
        $navBg.css("transform","translateY(0)");
    } else {
        $navBg.css("transform","translateY(-106px)");
    }
  });

  
//slide menu
$('.menu-btn').on('click', function () {
  $('.slide-menu').addClass("open");
  $('.disable').addClass("on");
});

$('.close-btn').on('click', function () {
  $('.slide-menu').removeClass("open");
  $('.disable').removeClass("on");
});

  //side form

  $('.form-btn').on("click", function(){
    $('.side-form').toggleClass('form-open');
});


  //AOS

  AOS.init({ disable: 'mobile' });