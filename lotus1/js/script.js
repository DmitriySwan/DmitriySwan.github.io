
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".header_nav").toggleClass("active");
        $("body").toggleClass("body");
    });
    
    $('body').append('<button class="btn-up"/>');
    $('.btn-up').click(function(){
        $('body').animate({'scrollTop':0}, 1000);
        $('html').animate({'scrollTop':0}, 1000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 1000){
            $('.btn-up').addClass('active');
        } 
        else {
            $('.btn-up').removeClass('active');
        }
    });
    
});


