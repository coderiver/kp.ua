$(document).ready(function() {
   $(window).scroll(function() {
      if ($(window).scrollTop() > 30) {
         $('.top-bar').addClass('top-bar_act');
      }
      else {
         $('.top-bar').removeClass('top-bar_act');
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
   // scrollable 
   $(".scroll").scrollable({
         next:'.scroll__next',
         prev:'.scroll__prev',
         circular: true, 
         mousewheel: true,
   });

   $(".scroll__items:first").next().children("div:first").addClass("active");
   var img_text = $(".active .js-hidden-text").html();
   var img_link = $(".active a").attr("href");
   $(".photo-day__text").html(img_text);
   $(".photo-day__current img").attr("src", img_link);
   $(".scroll__items div a").click(function(){
      $(".scroll__items div").removeClass("active");
      $(this).parent().addClass("active");
      img_link = $(this).attr("href");
      img_text = $(this).next().html();
      $(".photo-day__current img").attr("src", img_link);
      $(".photo-day__text").html(img_text);
      return false;
   });
});