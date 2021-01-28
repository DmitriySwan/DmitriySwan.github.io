
$(function(){
    
    $(".vif_showmore").hide();

    $(".vif_more").click(function() {
        $(".vif_showmore").slideToggle();
        $(this).toggleClass('active');
    });

});


