
 $(function(){
     
     //прокрутка
    $('.inside').niceScroll({
         "verge" : "500",
         scrollspeed: 40
     }); 
     
     //якоря
     $('.portfolio-nav').on('click','a', function(e) {
         e.preventDefault();
         var id  = $(this).attr('href'),
             left = $(id).offset().left - 50;
         $('body,html').animate({scrollLeft: left}, 1500);
     });
     
     //skillbar
     
     $('.skillbar-item').each(function(){
         $(this).find('.skillbar-bar').animate({
             width:'85%'
         }, 2500);
     });
     
}); 

$(window).on('load', function () {
    
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});