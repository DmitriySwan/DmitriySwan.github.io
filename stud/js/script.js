
$(function(){
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".header_nav ul").toggleClass("active");
    });
    
    $(".top_item").slice(10).hide();

    $(".top_more").click(function() {
        $(".top_item").slice(10).fadeToggle();
    });
    
    $(".reviews_item--more").hide();
    
    $('.reviews_item--arrow').click(function() {
        $(this).closest('.reviews_item').find('.reviews_item--more').slideToggle();
        $(this).toggleClass('active');
    });
    
    $(".work_item--more").hide();
    
    $('.work_item--arrow').click(function() {
        $(this).closest('.work_item').find('.work_item--more').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.scroll').perfectScrollbar();

});


