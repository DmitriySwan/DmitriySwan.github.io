
$(function(){
    
    $("#phone").mask("+7 (999) 999-9999");
    
    // Модальное окно

    // открыть по кнопке
    $('.callback').click(function() { 

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



    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $('.header_nav').toggleClass("active");
    });
    
    $("#click").click(function() {
        $(".hide").toggleClass('active');
    });
    
    $("#click2").click(function() {
        $(".hide2").toggleClass('active');
    });
    
    $('.gallery_wrap').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Как только будет загружен API и готов DOM, выполняем инициализацию
    ymaps.ready(init);

    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map")
        var myMap = new ymaps.Map('map', {
            // При инициализации карты, обязательно нужно указать
            // ее центр и коэффициент масштабирования
            center: [54.7141,56.0064],
            zoom: 16
        });
    }
    

});


