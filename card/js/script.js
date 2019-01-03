
$(function(){
    
    $('#search').on('click', function(){
       $('.label').toggleClass('active'); 
    });
   
    
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        dots: true
    });
    
    $('.content_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
    });
    
    $(".goods-item_complect--item").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });
    
    $('.item_bottom').not(':first').hide();
    
    $(".item_top--right").click(function() {
        $(this).parent('.item_top').next('.item_bottom').slideToggle(500);
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
    
    
    $('body').append('<button class="btn-up"/>');
    $('.btn-up').click(function(){
        $('body').animate({'scrollTop':0}, 500);
        $('html').animate({'scrollTop':0}, 500);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 1000){
            $('.btn-up').addClass('active');
        } 
        else {
            $('.btn-up').removeClass('active');
        }
    });

});


