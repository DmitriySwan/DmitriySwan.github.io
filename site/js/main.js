$(document).ready(function(){
    
    // открыть по кнопке
    $('.popup__btn').click(function() { 

        $('#overlay0').fadeIn();
        $('#overlay0').addClass('disabled');
    });
    
    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();

        }
    });
    
    
    function e(){$(window).scrollTop()>900?$(".scrollTop").fadeIn(700):$(".scrollTop").fadeOut(700)}function t(e){$(e).empty().append("<p>"+$(e).data("percent")+"%</p>"),n(e)}function n(e){var t=$(e).data("percent"),i=.36*t;$(e).children().length-1<i&&($(e).append('<div class="bar"></div>'),setTimeout(function(){n(e)},30))}AOS.init({}),svg4everybody({}),$(".header__item").click(function(){$(this).find("a").addClass("active"),$(this).siblings().find("a").removeClass("active")}),$(".js-scroll").click(function(e){e.preventDefault();var t=$(e.target).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n-92},1e3)}),$(".scroller").bind("click.smoothscroll",function(e){e.preventDefault();var n=this.hash,i=$(n);$("html:not(:animated),body:not(:animated)").animate({scrollTop:i.offset().top-110+"px"},700,"swing",function(){window.location.hash=n}),t("#chart0"),t("#chart1"),t("#chart2")}),$(".scrollTop").click(function(e){e.preventDefault(),$("html:not(:animated),body:not(:animated)").animate({scrollTop:0},550)}),$(window).scroll(function(){e()}),e(),$(".header__mobile-hum").click(function(){$(".header__nav--mobile").slideToggle(),$(".header__mobile-hum").is(".close")?$(".header__mobile-hum").removeClass("close").html("Меню"):$(".header__mobile-hum").addClass("close").html("&#10006;")}),$(".header__nav--mobile a").click(function(){$(".header__nav--mobile").slideUp(),$(".header__mobile-hum").removeClass("close").html("Меню")}),$(".btn").on("click",function(){$(this).append("<span class='ripple-effect'>"),$(this).find(".ripple-effect").css({left:event.pageX-$(this).position().left,top:event.pageY-$(this).position().top}).animate({opacity:0},500,function(){$(this).remove()})}),$(".popup-modal").magnificPopup({type:"inline",preloader:!1,modal:!0}),$(document).on("click",".popup-modal-dismiss, .modal__exit",function(e){e.preventDefault(),$.magnificPopup.close()});var i=$(".numbered"),o=new Numbered(i);i.on("change blur input focusin",function(){var e=o.validate();i.toggleClass("error",e<0).toggleClass("empty",0===e).toggleClass("valid",e>0)}),$("form").submit(function(e){e.preventDefault();var t=$(this).serialize();$.ajax({type:"POST",url:"mail.php",data:t,success:function(){$(".thanks").click()}})}),$(".slick").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:1e4,arrows:!1});var r=0;$(".circle-chart").each(function(){var e="chart"+r;$(this).attr("id",e),t("#"+e),r++}),$(".circle-chart").click(function(){t("#"+$(this).attr("id"))})});