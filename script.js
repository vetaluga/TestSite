
    $(document).ready(function(){
// ANIMATION BLOCKS
        $(window).scroll(function() {
          $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 550) {
              $(this).addClass("slide");
            }
          });
        });

//SCROLL TOP AND HIDE
      var $btnTop = $(".btn-top");
  //HIDE BUTTON
      $(window).scroll(function(){
        if($(document).scrollTop() > 30){
          $btnTop.fadeIn("slow");
        } else {
          $btnTop.fadeOut("slow");
        }
      });
  //SCROLL TOP
      $btnTop.on("click", function(){
          $("html,body").animate({scrollTop:0}, 900);
      });
  });
