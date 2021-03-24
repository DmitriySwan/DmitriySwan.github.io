
$(function(){
    
    $('.goods_slider').slick({
        variableWidth:true,
        swipe:true,
        autoplay:true
    });
    
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".header_left").toggleClass("active");
    });
    
    $('.range1').createSlide({
        output:'.output1',
        progress:true
    });
    
    $('.range2').createSlide({
        output:'.output2',
        progress:true
    });
    
    $('.tovar_size--open').hide();
    $('.tovar_size--back').hide();
    

    $(".tovar_size--top").click(function() {
        $(this).next('.tovar_size--open').slideToggle(500);
        $('.tovar_size--back').fadeIn();
    });
    
    $(".tovar_size--back").click(function() {
        $('.tovar_size--open').hide(500);
        $('.tovar_size--back').hide();
    });
    
    $(".tovar_btn--select").click(function() {
        $(".popover_size").toggleClass("active");
    });
    
    $(".size").click(function() {
        $(".popover_size2").toggleClass("active");
    });
    
    $(".sort").click(function() {
        $(".popover_size3").toggleClass("active");
    });
    
    $(".tovar_btn--color").click(function() {
        $(".popover_color").toggleClass("active");
    });
    
    $(".tovar_calc--color").click(function() {
        $(".popover_calc--color").toggleClass("active");
    });
    
    $(".header_basket").click(function() {
        $(this).toggleClass("active");
        $(".popover_basket").toggleClass("active");
    });
    
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});


