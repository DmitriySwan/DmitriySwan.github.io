
$(function(){
    
    $(".way_item").not(":first").hide();
    $(".way_tab").click(function() {
        $(".way_tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".way_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
                               
      $( ".happy_pin1" ).mouseenter(function() {
        $('.happy_text1').addClass('active');
          $('.happy_pin1').addClass('active');
    });
    $( ".happy_pin1" ).mouseleave(function() {
        $('.happy_text1').removeClass('active');
        $('.happy_pin1').removeClass('active');
    });
    
    $( ".happy_pin2" ).mouseenter(function() {
        $('.happy_text2').addClass('active');
        $('.happy_pin2').addClass('active');
    });
    $( ".happy_pin2" ).mouseleave(function() {
        $('.happy_text2').removeClass('active');
        $('.happy_pin2').removeClass('active');
    });

    $( ".happy_pin5" ).mouseenter(function() {
        $('.happy_text5').addClass('active');
        $('.happy_pin5').addClass('active');
    });
    $( ".happy_pin5" ).mouseleave(function() {
        $('.happy_text5').removeClass('active');
        $('.happy_pin5').removeClass('active');
    });

    
    jQuery(function($){
        $(".phone").mask("+7 (999) 999-9999");
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".menu-top-wrap").toggleClass("active");
        $(".header_left--ul").toggleClass("active");
    });

    $(".header_left--ul").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(".header_wrap").removeClass("default");
        $(window).scroll(function(){
            if ($(this).scrollTop() > 20) {
                $(".header_wrap").addClass("default").fadeIn('fast');
            } else {
                $(".header_wrap").removeClass("default").fadeIn('fast');
            };
        });
    
    $('body').append('<button class="btn-up"/>');
    $('.btn-up').click(function(){
        $('body').animate({'scrollTop':0}, 1000);
        $('html').animate({'scrollTop':0}, 1000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 1000){
            $('.btn-up').addClass('active');
        } 
        else {
            $('.btn-up').removeClass('active');
        }
    });
    
    $(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });
    
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
    
    $(".visa").fancybox({});
    

    jQuery(function($){
        $(".phone").mask("+375 (99) 999-99-99");
    });
    
    $(window).on("load resize", function(){
        var width = $(document).width();

        if (width > 900) {
            $('.slider').slick('unslick');
        } else {
            $('.slider').not('.slick-initialized').slick({  
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            });
        }
    });
                          
});


