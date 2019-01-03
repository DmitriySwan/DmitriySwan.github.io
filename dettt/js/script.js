
$(function(){
    
    
    // Модальное окно

    // открыть по кнопке
    $('.form_btn').click(function() { 

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
    
    
    $('.mailer').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.success').css('display','inline-block');
            $(".mailer").trigger("reset");
        });
        return false;
    });

    
    $('.spons_wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        speed: 1000,
        arrows: true,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.gallery_item').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        mainClass: 'mfp-with-zoom', 
        zoom: {
            enabled: true, 
            duration: 300, 
            easing: 'ease-in-out', 
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });
});


