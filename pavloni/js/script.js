
$(function(){
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $("#menu-burger").toggleClass("active");
    });

    $('.service_slider').slick({
        arrows: true,
        slidesToShow: 4
    });
    
    $('.gallery_slider').slick({
        arrows: true,
        slidesToShow: 4
    });
    
    $('.action_slider').slick({
        arrows: true,
        slidesToShow: 1
    });
    
    $('.review_slider').slick({
        arrows: true,
        slidesToShow: 2
    });
    
    $('.intro_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots: true,
        vertical: true
    });
});


