
$(function(){
    
    $('.photo_slider').on(`init reInit`, function(event, slick) {
        $('.photo_count').text(1 + ' / ' + slick.slideCount);
    });
    $('.photo_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.photo_count').text(currentSlide + 1 + ' / ' + slick.slideCount);
        
    });
    $('.photo_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots:false,
        variableWidth: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    variableWidth: false
                }
            }
        ]
    });
    
    $('.arrow1').on('click', function() {
        $('.photo_slider').slick('slickNext');
    });
    $('.arrow2').on('click', function() {
        $('.photo_slider').slick('slickPrev');
    });
    
    
    $('.doc_slider').slick({
        arrows: true,
        slidesToShow: 1,
        dots:false,
        swipe: true,
        variableWidth: true
    });
    
    $('.doc_mob').slick({
        slidesToShow: 1,
        dots:false,
        swipe: true,
        variableWidth: true
    });
    
    
    $('.arrow4').on('click', function() {
        $('.doc_slider').slick('slickNext');
    });
    $('.arrow3').on('click', function() {
        $('.doc_slider').slick('slickPrev');
    });
    
    $('.arrow4').on('click', function() {
        $('.doc_mob').slick('slickNext');
    });
    $('.arrow3').on('click', function() {
        $('.doc_mob').slick('slickPrev');
    });
    
    // Модальное окно

    // открыть по кнопке
    $('.header_menu').click(function() { 

        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
        $('body').addClass('active');
    });

    // закрыть на крестик
    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign').fadeOut();
        $('body').removeClass('active');

    });
    
    // открыть по кнопке
    $('.callback').click(function() { 

        $('.js-overlay-campaign1').fadeIn();
        $('body').addClass('active');
    });

    // закрыть на крестик
    $('.js-close-campaign1').click(function() { 
        $('.js-overlay-campaign1').fadeOut();
        $('body').removeClass('active');

    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign1');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign1').fadeOut();
            $('body').removeClass('active');
        }
    });

    $('.menu_reg--bottom').hide();
    
    $(".menu_reg__last").click(function() {
        $(this).prev('.menu_reg--bottom').slideToggle(500);
        $(this).toggleClass('active');
    });
    
});


