
$(function(){
    
    $('.intro-slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true
    });
    
    $('.move_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.reviews_slider').slick({
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $("#menu").toggleClass("active");
    });

});


