
$(function(){
    
    //ajax
    $(".mailer").submit(function() { 
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mailer.php", 
            data: th.serialize()
        }).done(function() {
            $(th).find(".success").addClass("active").css("display", "flex").hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                $(th).find(".success").removeClass("active").fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });
    
    //якоря
    $(".main-nav").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    //бургер
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $('.main-nav').toggleClass('active');
    });
    
    
    //наверх
    $('body').append('<button class="btn-up"/>');
    $('.btn-up').click(function(){
        $('body').animate({'scrollTop':0}, 1000);
        $('html').animate({'scrollTop':0}, 1000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 1400){
            $('.btn-up').addClass('active');
        } 
        else {
            $('.btn-up').removeClass('active');
        }
    });
    
    // Модальное окно

    // открыть по кнопке
    $('.form-btn').click(function() { 

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

});


