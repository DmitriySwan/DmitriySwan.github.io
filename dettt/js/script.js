
$(function(){
    
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


