$(function(){
    
    $(".menu__anchour").click(function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 120;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    new WOW().init();
    
    $( ".banner_item1" ).mouseenter(function() {
        $('.banner_item1--content').addClass('active');
    });
    $( ".banner_item1" ).mouseleave(function() {
        $('.banner_item1--content').removeClass('active');
    });
    
    $( ".banner_item2" ).mouseenter(function() {
        $('.banner_item2--content').addClass('active');
    });
    $( ".banner_item2" ).mouseleave(function() {
        $('.banner_item2--content').removeClass('active');
    });
    
    $( ".banner_item3" ).mouseenter(function() {
        $('.banner_item3--content').addClass('active');
    });
    $( ".banner_item3" ).mouseleave(function() {
        $('.banner_item3--content').removeClass('active');
    });

    
});