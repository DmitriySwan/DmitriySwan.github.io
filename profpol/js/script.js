
$(function(){
    
    $('ul.navmenu').flexMenu({
        showOnHover: false,
        linkText: "Еще...",
        linkTitle: "Показать еще",
        linkTextAll: "Меню",
        linkTitleAll: "Развернуть меню", 
        popupClass: 'more_dropdown'
    });
    
    $('.intro_slider').slick({
        slidesToShow: 1,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'intro_dots',
        arrows: true,
        autoplay:true
    });
    
    $('.intro_arrow1').on('click', function() {
        $('.intro_slider').slick('slickPrev');
    });
    $('.intro_arrow2').on('click', function() {
        $('.intro_slider').slick('slickNext');
    });
    
    $('.trig_slider').slick({
        slidesToShow: 8,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'trig_dots',
        arrows: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    
    $('.partners_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'partners_dots',
        arrows: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.reviews_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'reviews_dots',
        arrows: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
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
    
    $('.watched_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'watched_dots',
        arrows: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.watched_arrow1').on('click', function() {
        $('.watched_slider').slick('slickPrev');
    });
    $('.watched_arrow2').on('click', function() {
        $('.watched_slider').slick('slickNext');
    });
    
    $('.tab_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: true,
        infinity: true,
        dots:true,
        dotsClass: 'tab_dots',
        arrows: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.tab_arrow1').on('click', function() {
        $('.tab_slider').slick('slickPrev');
    });
    $('.tab_arrow2').on('click', function() {
        $('.tab_slider').slick('slickNext');
    });
    
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $.fn.extend({
        toggleText: function(a, b){
            return this.text(this.text() == b ? a : b);
        }
    });
    
    $(".about_text--showmore").hide();

    $(".about_text--more").click(function() {
        $(".about_text--showmore").slideToggle();
        $(this).toggleText('Читать дальше', 'Свернуть');
        $(this).toggleClass('active');
    });
    
    $(".dropdown-menu").hide();

    $(".dropdown-toggle").click(function() {
        $(".dropdown-menu").slideToggle();
        $(this).toggleClass('active');
    });
    
    $(".header_tels--hidden").hide();

    $(".header_tels").click(function() {
        $(".header_tels--hidden").slideToggle();
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
    
    $('.scroll').perfectScrollbar();
    

});


