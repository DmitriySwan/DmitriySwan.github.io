
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
    });
    
    
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    
    $('.check_item--more').hide();
    
    $('.check_item--down').click(function() {
        $(this).closest('.check_item').find('.check_item--more').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.reviews_slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        swipe: true,
        dotsClass: 'reviews_dots',
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
    
    $('.experience_slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        swipe: true,
        dotsClass: 'experience_dots',
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.experience_arrow1').on('click', function() {
        $('.experience_slider').slick('slickPrev');
    });
    $('.experience_arrow2').on('click', function() {
        $('.experience_slider').slick('slickNext');
    });
    
    $('.spons_slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        dotsClass: 'spons_dots',
        dots: true
    });
    
    $('.faq_body').hide();
    
    $(".faq_top").click(function() {
        $(this).next('.faq_body').slideToggle(500);
        $(this).toggleClass('active');
    });
    
    $(".header").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 131) {
            $(".header").addClass("default").fadeIn('fast');
        } else {
            $(".header").removeClass("default").fadeIn('fast');
        };
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });

});


