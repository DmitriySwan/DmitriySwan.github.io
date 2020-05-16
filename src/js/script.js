
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
        centerMode: true,
        variableWidth: true
    });
    
    $('.doc_slider').slick({
        arrows: true,
        slidesToShow: 3,
        dots:false,
        centerMode: true,
        variableWidth: true
    });
});


