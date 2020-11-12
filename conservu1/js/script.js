
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
        arrows: false,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity:false,
        swipe: true,
        dotsClass: 'category_dots',
        dots: true
    });
    
    $('.category_arrow1').on('click', function() {
        $('.category_slider').slick('slickPrev');
    });
    $('.category_arrow2').on('click', function() {
        $('.category_slider').slick('slickNext');
    });
    
    $('.reviews_slider').slick({
        arrows: true,
        variableWidth: true,
        slidesToShow: 1,
        swipe: true,
        dotsClass: 'reviews_dots',
        dots: true
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

});


