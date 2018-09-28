
$(function(){
    
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

    jQuery(function($){
        $(".phone").mask("+7 (999) 999-9999");
    });
    
    $(".header_nav").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
        $(".form").submit(function() {
            $.ajax({
                type: "POST",
                url: "mailer.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                $("#form").trigger("reset");
            });
            return false;
        });



    // Как только будет загружен API и готов DOM, выполняем инициализацию
    ymaps.ready(init);

    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map")
        var myMap = new ymaps.Map('map', {
            // При инициализации карты, обязательно нужно указать
            // ее центр и коэффициент масштабирования
            center: [56.326944, 44.0075], // Нижний Новгород
            zoom: 13
        });
    }


    

});


