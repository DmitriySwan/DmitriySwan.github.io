
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
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 600
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
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
        responsive: [
            {
                breakpoint: 770,
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
        responsive: [
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1074,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 544,
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
        responsive: [
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1074,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.card__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card__nav',
        dots:false,
        infinity:false
    });
    $('.card__nav').slick({
        asNavFor: '.card__slider',
        dots: true,
        focusOnSelect: true,
        dots:false,
        infinity:false,
        centerMode: true,
        variableWidth: true
    });

    $('.tab_arrow1').on('click', function() {
        $('.tab_slider').slick('slickPrev');
    });
    $('.tab_arrow2').on('click', function() {
        $('.tab_slider').slick('slickNext');
    });
    
    $(".tab_item").not(":first").hide();
    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
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
    
    $(window).on('load', function () {

        $(".loader_inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");
    });
    
    const slider = document.getElementById('sliderPrice');
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = document.querySelectorAll('input.range__input');

    noUiSlider.create(slider, {
        start: [rangeMin, rangeMax],
        connect: true,
        step: step,
        range: {
            'min': rangeMin,
            'max': rangeMax
        },

        // make numbers whole
        format: {
            to: value => value,
            from: value => value
        }
    });

    // bind inputs with noUiSlider 
    slider.noUiSlider.on('update', (values, handle) => { 
        filterInputs[handle].value = values[handle]; 
    });

    filterInputs.forEach((input, indexInput) => { 
        input.addEventListener('change', () => {
            slider.noUiSlider.setHandle(indexInput, input.value);
        })
    });
    
    $(".navbar_content").hide();

    $(".navbar_top").click(function() {
        $(this).next(".navbar_content").slideToggle();
        $(this).toggleClass('active');
    });
    
    const slider1 = document.getElementById('sliderPrice2');
    const rangeMin1 = parseInt(slider.dataset.min);
    const rangeMax1 = parseInt(slider.dataset.max);
    const step1 = parseInt(slider.dataset.step);
    const filterInputs1 = document.querySelectorAll('input.range__input2');

    noUiSlider.create(slider1, {
        start: [rangeMin1, rangeMax1],
        connect: true,
        step: step1,
        range: {
            'min': rangeMin1,
            'max': rangeMax1
        },

        // make numbers whole
        format: {
            to: value => value,
            from: value => value
        }
    });

    // bind inputs with noUiSlider 
    slider1.noUiSlider.on('update', (values, handle) => { 
        filterInputs1[handle].value = values[handle]; 
    });

    filterInputs1.forEach((input, indexInput) => { 
        input.addEventListener('change', () => {
            slider1.noUiSlider.setHandle(indexInput, input.value);
        })
    });
    
    $(".characteristic_item").not(":first").hide();
    $(".characteristic_row .characteristic_tab").click(function() {
        $(".characteristic_row .characteristic_tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".characteristic_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $(".card_dop--child").click(function(){
        $(".card_dop--child").removeClass("active");
        $(this).addClass("active");
    });
    
});
