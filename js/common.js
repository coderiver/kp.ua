$(document).ready(function() {
   $(window).scroll(function() {
      if ($('body').scrollTop() > 30) {
         $('.header').removeClass('.header_scroll');
         $('.top-bar').css('margin-top', '0');
      }
      else {
         $('.header').addClass('header_scroll');
         $('.top-bar').css('margin-top', '30px');
     }
   });
});