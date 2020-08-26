// JavaScript Document
$(function(){

$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

});

$(function(){
  $('a[href^="#"]').on("click", function() {
  var speed = 700;
  var adjust = 50;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - adjust;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
});

$(function(){

  $("#menubtn").click(function(){
    $("#list").slideToggle();
  });

});
