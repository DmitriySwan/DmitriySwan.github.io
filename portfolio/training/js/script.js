
$(function(){
    $(".wrap_btn").on("click","a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 20;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


