
$(function(){
    
    $(".callback").fancybox({});
    
    jQuery(function($){
        $(".phone_ru").mask("+7 (999) 999-9999");
    });
    
    if($(window).width() > 1024) {
        $(".header").removeClass("default");
        $(window).scroll(function(){
            if ($(this).scrollTop() > 320) {
                $(".header").addClass("default").fadeIn('fast');
            } else {
                $(".header").removeClass("default").fadeIn('fast');
            };
        });   
    }
    
    $(".intro_btn").on("click", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 500);
    });
    
    $(".header_nav").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
    
    $(".wh_btn").click(function() {
        $(".wh_form").toggleClass("active");
    });
    
    if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
        fotoramaDefaults = {
            nav: 'thumbs',
            allowfullscreen: 'native',
            keyboard: true,
            maxheight: 560
        }
    } else {
        fotoramaDefaults = {
            nav: 'thumbs',
            allowfullscreen: 'native',
            keyboard: true,
            maxheight: 320
        }
    }
    
});


