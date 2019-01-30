
$(function(){
    
    $('.header_lang--rus').on('click', function(){
        $('.header_lang svg').toggleClass('active');
        $('.header_lang--eng').toggleClass('active');       
    });
    
    $('.slider_content').slick({
        arrows:true,
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows:false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 1500
                }
            }
        ]
    });
    
    $('.footer_arrow').on('click', function() {
        $('html,body').animate(
            {
                scrollTop:0
            },2000);
    });
    
    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        $('.header_menu').toggleClass('active');
        $('.header_lang').toggleClass('active');
        $('.body').toggleClass('active');
    });
    
    
    $('.callback').click(function() { 

        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
        $('.body').addClass('active');
    });

    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign').fadeOut();
        $('.body').removeClass('active');

    });

    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();

        }
    });
});


