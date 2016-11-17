$(function() {

	// Custom JS
  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
    return false;
  });
  // scroll window
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
      $('.count').text(wScroll);
      // if(wScroll > 100){
      //   var animationName = "animated fadeOut";
      //   var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      //
      //   $('.hero__text').addClass(animationName).one(animationEnd, function(){
      //     $(this).removeClass(animationName);
      //   });
      //
      // }
      if(wScroll > 654){
        $('.img__1').addClass('animated fadeInRight');
      }
      if(wScroll > 1106){
        $('.img__2').addClass('animated fadeInLeft');
      }
      if(wScroll > 1651){
        $('.img__3').addClass('animated fadeInRight');
      }
      if(wScroll > 2146){
        $('.img__4').addClass('animated fadeInLeft');
      }
      if(wScroll > 80){
        $('.intro__p').addClass('animated fadeInUp');
      }
      if( wScroll > 30){
          $('.header').css({
            'background-color':'rgba(255,255,255,1)',
            'border-bottom':'1px solid #f1c30f'
          });
          $('.header__nav ul li a').css({
            'color':'#333'
          });
          $('.header__svg path').css({
            'fill':'#f1c40f'
          });
      }

      else {
        $('.header').css({
          'background-color':'transparent',
          'border-bottom':'none'
        });
        $('.header__nav ul li a').css({
          'color':'#fff'
        });
        $('.header__svg path').css({
          'fill':'#fff'
        });

      }
    });
  //end scroll window
  $('.header__burger').on('click',function(){
    $('.header__nav').slideToggle(1000);
  });

});
