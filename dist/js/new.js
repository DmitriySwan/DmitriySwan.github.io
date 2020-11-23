$(function(){
    
    $(".menu__anchour").click(function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 120;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    new WOW().init();
    
    
});