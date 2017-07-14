jQuery(document).ready(function ($) {
  // Scroll navigation
  $("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  //Fullscreen
  $(".header__hamburger").on('click', function(e){
    e.preventDefault();
    $(".fullscreen").css("display", "block");
    $(".header__hamburger").css("display", "none")
  });

  $(".fullscreen-cross").on('click', function(e){
    e.preventDefault();
    $(".fullscreen").css("display", "none");
    $(".header__hamburger").css("display", "block")
  });

  $(".welcome__button_authorization").on('click', function(e){
    e.preventDefault();
    $(".welcome__form").css("transform", "rotateY(180deg)");
    $(".login__form").css("transform", "rotateY(0deg)")
  });

// blog scrolling

  function refreshVar() {
    navPos = $('.blog__sidebar').offset().top;
    navHeight = $('.blog__sidebar').outerHeight(true);
  }
  refreshVar();

  // $(window).resize(refreshVar);

  $('<div class="clone-blog__sidebar"></div>').insertBefore('.blog__sidebar').css('height', navHeight).hide();

  $(window).scroll(function() {
    winPos = $(window).scrollTop();

    if (winPos >= navPos) {
      $('.blog__sidebar').addClass('blog__sidebar-fixed');
      $('.clone-blog__sidebar').show();
      $('.blog__sidebar').css('padding-top', '0');
      $('.blog__sidebar-fixed').css('transition', '0.5s');

    }
    else {
      $('.blog__sidebar').removeClass('blog__sidebar-fixed');
      $('.clone-blog__sidebar').hide();
      $('.blog__sidebar').css('padding-top', '100px');
      $('.blog__sidebar-fixed').css('transition', '0.5s');


    }
  });





});







