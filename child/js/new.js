$(function(){
    
    $(".menu__anchour").click(function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 120;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    new WOW().init();
    
    $( ".banner_item1" ).mouseenter(function() {
        $('.banner_item1--content').addClass('active');
    });
    $( ".banner_item1" ).mouseleave(function() {
        $('.banner_item1--content').removeClass('active');
    });
    
    $( ".banner_item2" ).mouseenter(function() {
        $('.banner_item2--content').addClass('active');
    });
    $( ".banner_item2" ).mouseleave(function() {
        $('.banner_item2--content').removeClass('active');
    });
    
    $( ".banner_item3" ).mouseenter(function() {
        $('.banner_item3--content').addClass('active');
    });
    $( ".banner_item3" ).mouseleave(function() {
        $('.banner_item3--content').removeClass('active');
    });
    
    $(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: $(this).serialize()
        }).done(function() {
            window.location.href = '../thank.html';
        });
        return false;
    });
    
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
            $(this).css("height", "0");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
            $(this).css("height", "auto");
        });
    };
    
    $(".tab_item").not(":first").invisible();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").invisible().eq($(this).index()).visible()
    }).eq(0).addClass("active");
    
    $('.goods-card__slider').slick({
        arrows: true,
        infinity: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        dotsClass: 'goods-card__dots',
        dots: true,
        nextArrow: '<div class="goods-card__arrow2" aria-hidden="true"></div>',
        prevArrow: '<div class="goods-card__arrow1" aria-hidden="true"></div>',
    });
    
   

    
});