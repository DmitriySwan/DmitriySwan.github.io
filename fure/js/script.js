
$(function(){
    
    $(".types_item").not(":first").hide();
    $(".types_tab").click(function() {
        $(".types_tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".types_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $('.types_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots:true,
        dotsClass: 'types_dots',
        swipe: true,
        infinity: true
    });
    
    $('.intro_slider').slick({
        slidesToShow: 1,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'intro_dots'
    });


    $('.types_arrow1').on('click', function() {
        $('.types_slider').slick('slickPrev');
    });
    $('.types_arrow2').on('click', function() {
        $('.types_slider').slick('slickNext');
    });
    
    $('.review_slider').slick({
        arrows: true,
        slidesToShow: 3,
        swipe: true,
        infinity: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 777,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.review_arrow1').on('click', function() {
        $('.review_slider').slick('slickPrev');
    });
    $('.review_arrow2').on('click', function() {
        $('.review_slider').slick('slickNext');
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".header_bottom--menu").toggleClass("active");
    });
    
    $(".header_top--lang").click(function() {
        $(".header_top--down").toggleClass("active");
    });
    
    $('.two_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots:true,
        dotsClass: 'two_dots',
        swipe: true,
        infinity: true
    });


    $('.two_arrow1').on('click', function() {
        $('.two_slider').slick('slickPrev');
    });
    $('.two_arrow2').on('click', function() {
        $('.two_slider').slick('slickNext');
    });
    
});


