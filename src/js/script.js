
$(function(){
    
    $(".callback").fancybox({});
    
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        useCSS: false,
        animationLoop: false,
        smoothHeight: true,
        before: function(slider){
            $f(player).api('pause');
        }
    });
    
    if($(window).width() > 1024) {
        $(".header").removeClass("default");
        $(window).scroll(function(){
            if ($(this).scrollTop() > 320) {
                $(".header").addClass("default").fadeIn('fast');
            } else {
                $(".header").removeClass("default").fadeIn('fast');
            };
        });   
    }
    
    $(".intro_btn").on("click", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 500);
    });
    
    $(".header_nav").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });

});


