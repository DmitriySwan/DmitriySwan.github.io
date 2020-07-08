
$(function(){
    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $("#menu").toggleClass("active");
    });   
    
    $('.photo_item').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        mainClass: 'mfp-with-zoom', 
        zoom: {
            enabled: true, 
            duration: 300, 
            easing: 'ease-in-out', 
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

});


