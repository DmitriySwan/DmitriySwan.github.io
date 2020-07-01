
$(function(){
    
    jQuery(function($){
        $(".phone").mask("+38 (999) 99-99-999");
    });
    
    $('.work_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots:true,
        dotsClass: 'work_dots',
        swipe: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
    $('.work_arrow1').on('click', function() {
        $('.work_slider').slick('slickNext');
    });
    $('.work_arrow2').on('click', function() {
        $('.work_slider').slick('slickPrev');
    });
    
    $('.review_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots:true,
        dotsClass: 'review_dots',
        swipe: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.review_arrow1').on('click', function() {
        $('.review_slider').slick('slickNext');
    });
    $('.review_arrow2').on('click', function() {
        $('.review_slider').slick('slickPrev');
    });
    
    $('body').append('<button class="btn-up"/>');
    $('.btn-up').click(function(){
        $('body').animate({'scrollTop':0}, 1000);
        $('html').animate({'scrollTop':0}, 1000);
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 1000){
            $('.btn-up').addClass('active');
        } 
        else {
            $('.btn-up').removeClass('active');
        }
    });
    
    $(".intro_bottom--btn").on("click", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 800);
    });
});


