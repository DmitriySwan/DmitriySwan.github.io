
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".header_bottom__nav").toggleClass("active");
    });
    
    $(".btn-up").on("click", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 500);
    });
    
    $(".header_bottom__nav").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $('.reviews_content').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.work_slider').slick({
        arrows: true,
        slidesToShow: 1
    });
    
    $('.text-slider').slick({
        arrows: true,
        speed: 300,
        slidesToShow: 1
    });
    
    // Модальное окно

    // открыть по кнопке
    $('.js-button-campaign').click(function() { 

        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
    });

    // закрыть на крестик
    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign').fadeOut();

    });
    

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();

        }
    });

    
});


