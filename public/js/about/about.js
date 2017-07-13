jQuery(document).ready(function ($) {
  // Scroll navigation
  $("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();


  });
});