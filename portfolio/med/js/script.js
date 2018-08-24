
$(function(){
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active"),
        $('.main-nav').toggleClass("active");
    });
    
    $(".category-title").click(function() {
        $(".sidebar__category .sub-menu").toggleClass('active');
    });
    $(".category-title").click(function() {
        $(".main-sidebar__category .sub-menu").toggleClass('active');
    });
    
    $(".main-nav__sale").mouseenter(function() {
        $(".sale-box__item").addClass('active');
    });
    $(".main-nav__sale").mouseleave(function() {
        $(".sale-box__item").removeClass('active');
    });
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        dots: true
    });
    $('.category__item').click(function(e){
        $(this).children('ul').toggle();
        e.stopPropagation();
        $(this).toggleClass('bg-active');
    });
});
