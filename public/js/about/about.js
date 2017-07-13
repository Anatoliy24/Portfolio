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







});







