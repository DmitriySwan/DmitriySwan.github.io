
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $('.header_nav').toggleClass("active");
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


