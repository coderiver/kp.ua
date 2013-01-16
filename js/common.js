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
   // tab social 
   $(".js-tab-soc-1").show();
   $(".soc-tabs li").click(function(){
      $(".soc-tabs li").removeClass("active");
      $(this).addClass("active");
      var tab_index = $(this).attr("data-tab");
      $(".tab-soc-cont").hide();
      $(tab_index).show();
   });
   // ----
   $(".archive-nav__region").click(function(){
      $(this).next().slideDown();
   });
});