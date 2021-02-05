
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
        speed: 500,
        fade: true
    });
    
    $(".down").on("click", function(e) {
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
    
    var $slider = $('.build_slider');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        
        sliderCounter.classList.add('build_counter'); 

        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + '/' +slidesCount)
        };

        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            fade: true
        });
        
    }
    
    $('.build_counter').appendTo('.build_img');
    
    $('.build_arrow1').on('click', function() {
        $slider.slick('slickPrev');
    });
    
    $('.build_arrow2').on('click', function() {
        $slider.slick('slickNext');
    });

    $('.spons_arrow1').on('click', function() {
        $('.spons_slider').slick('slickPrev');
    });
    $('.spons_arrow2').on('click', function() {
        $('.spons_slider').slick('slickNext');
    });
    
    $('.also_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });

    $('.also_arrow1').on('click', function() {
        $('.also_slider').slick('slickPrev');
    });
    $('.also_arrow2').on('click', function() {
        $('.also_slider').slick('slickNext');
    });
    
    jQuery(function($){
        $(".phone_ua").mask("+38 (999) 999-9999");
    });
    
    if(window.matchMedia('(max-width: 1200px)').matches) {
        $(".about_showmore").hide();

        $(".about_more").click(function() {
            $(".about_showmore").slideToggle();
            $(this).toggleClass('active');
        });
        
        $(".card_p--more").hide();

        $(".card_p--show").click(function() {
            $(".card_p--more").slideToggle();
            $(this).toggleClass('active');
        });
        
        $("#search_btn").click(function() {
            $("#search").slideToggle();
        });
        
        $(".close").click(function() {
            $("#search").slideToggle();
        });
    }
    
    
});


