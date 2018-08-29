$(document).ready(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".btn_row").toggleClass("black");
        $(".header_nav").toggleClass("left");
    });
    
    
    var $isAnimatedFirst = $('.first .is-animated'),
        $isAnimatedFirstSingle = $('.first .is-animated__single'),
        $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedSecondSingle = $('.second .is-animated__single'),
        $isAnimatedThird = $('.third .is-animated');

    $('#fullpage').fullpage({
        v2compatible: true,
        css3: true,
        scrollingSpeed: 1000,
        fitToSection: false,
        fitToSectionDelay: 2000,
        slidesNavigation: true,
        navigationPosition: 'right',
        navigation: true,
        onLeave: function(index, nextIndex, direction)  {

            // first animation
            if ( ( index == 1 || index == 3 ) && nextIndex == 2 ) { 
                $isAnimatedSecond.addClass('animated fadeInUp'); 
                $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
                $isAnimatedSecond.eq(1).css('animation-delay', '.5s');
                $isAnimatedSecond.eq(2).css('animation-delay', '.7s');
                $isAnimatedSecondSingle.addClass('animated fadeInLeft').css('animation-delay', '.15s');
            }
            if ( nextIndex != 2 ) {
                $isAnimatedSecondSingle.removeClass('animated fadeInLeft');
                $isAnimatedSecond.removeClass('animated fadeInUp');
            }
             
            if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
                $isAnimatedThird.addClass('animated fadeInUp'); 
                $isAnimatedThird.eq(0).css('animation-delay', '.3s');
                $isAnimatedThird.eq(1).css('animation-delay', '.5s');
            }
            
            if ( nextIndex != 3 ) {
                $isAnimatedThird.removeClass('animated fadeInUp');
            }
            if ( nextIndex != 1) {
                $isAnimatedFirstSingle.removeClass('animated fadeInLeft');
                $isAnimatedFirst.removeClass('animated fadeInUp'); 
            }
            if ( ( index == 2 || index == 3 ) && nextIndex == 1 ) {
                $isAnimatedFirstSingle.addClass('animated fadeInLeft');
                $isAnimatedFirst.addClass('animated fadeInUp'); 
            }
        },
        afterLoad: function(anchorLink, index) {
            $('.first').addClass('animated slideInLeft').css('animation-delay', '1s');
            $isAnimatedFirstSingle.addClass('animated fadeInLeft').css('animation-delay', '1.5s');
            $isAnimatedFirst.addClass('animated fadeInUp'); 
            $isAnimatedFirst.eq(0).css('animation-delay', '1.6s');
            $isAnimatedFirst.eq(1).css('animation-delay', '1.8s');
            $isAnimatedFirst.eq(2).css('animation-delay', '2s');
    }
    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);
});

$(window).on('load', function () {

    $(".preloader").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});