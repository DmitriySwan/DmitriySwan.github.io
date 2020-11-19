
$(function(){
    
    $('.scroll').perfectScrollbar();
    
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        var $price = $(this).parent().next().find('#price');
        var $points = parseInt($($price).text());
        $($price).text($points-55);
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        var $price = $(this).parent().next().find('#price');
        var $points = parseInt($($price).text());
        $($price).text($points+55);
        return false;
    });
    
    $('.category_slider').slick({
        arrows: true,
        infinity: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: true,
        dotsClass: 'category_dots',
        dots: true
        ,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
    $('.category_arrow1').on('click', function() {
        $('.category_slider').slick('slickPrev');
    });
    $('.category_arrow2').on('click', function() {
        $('.category_slider').slick('slickNext');
    });
    
    $('.reviews_slider').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        swipe: true,
        dotsClass: 'reviews_dots',
        dots: true,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]
    });

    $('.reviews_arrow1').on('click', function() {
        $('.reviews_slider').slick('slickPrev');
    });
    $('.reviews_arrow2').on('click', function() {
        $('.reviews_slider').slick('slickNext');
    });
    
    $(".catalog_item").not(":first").hide();
    $(".catalog_tab").click(function() {    $(".catalog_tab").removeClass("active").eq($(this).index()).addClass("active");
                                        $(".catalog_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $(".intro_btn").on("click", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 87;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    if(window.matchMedia('(max-width: 1200px)').matches) {
        $('.catalog_tab').hide();
        $(".catalog_click").click(function() {
            $('.catalog_tab').slideToggle(500);
        });
    }
    
    $('.card__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card__nav',
        dots:false
    });
    $('.card__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card__slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        dots:false
    });
    
    $('.also__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    $('.also_arrow1').on('click', function() {
        $('.also__slider').slick('slickPrev');
    });
    $('.also_arrow2').on('click', function() {
        $('.also__slider').slick('slickNext');
    });
    
    if(window.matchMedia('(max-width: 544px)').matches) {
        $('.also__slider').slick('unslick');
    }

});


