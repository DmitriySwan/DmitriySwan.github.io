
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".header_nav").toggleClass("active");
    });
    
    $('.project_slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true
    });
    
    $(".intro_down").on("click", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 700);
    });
    
    $('.spons_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.spons_arrow1').on('click', function() {
        $('.spons_slider').slick('slickPrev');
    });
    $('.spons_arrow2').on('click', function() {
        $('.spons_slider').slick('slickNext');
    });
    
    jQuery(function($){
        $(".phone_ua").mask("+38 (999) 999-9999");
    });
    
    if(window.matchMedia('(max-width: 1200px)').matches) {
        $(".about_showmore").hide();

        $(".about_more").click(function() {
            $(".about_showmore").slideToggle();
            $(this).toggleText('Читать дальше', 'Свернуть');
            $(this).toggleClass('active');
        });
    }
    
    
});


