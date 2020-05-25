
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
        swipe: true
    });
    
    $('.arrow1').on('click', function() {
        $('.photo_slider').slick('slickNext');
    });
    $('.arrow2').on('click', function() {
        $('.photo_slider').slick('slickPrev');
    });
    
    $('.doc_slider').on(`init reInit`, function(event, slick) {
        $('.doc_count').text(1 + slick.slideCount);
    });
    $('.doc_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.doc_count').text(currentSlide + 1 + slick.slideCount);

    });
    
    $('.doc_slider').slick({
        arrows: true,
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

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();

        }
    });

    $('.menu_reg--bottom').hide();
    
    $(".menu_reg__last").click(function() {
        $(this).next('.menu_reg--bottom').slideToggle(500);
    });
    
});


