
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $('.header_nav').toggleClass("active");
    });
    
    $(".header_nav--item:first-child").click(function() {
        $('.mobile').toggleClass("active");
    });
    
    // Модальное окно

    // открыть по кнопке
    $('.js-button-campaign').click(function() { 

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

	jQuery(function($){
   $("#tel").mask("+7(999) 999-9999");
});
    

});


