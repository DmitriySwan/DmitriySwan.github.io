
$(function(){
    
    $('.trust_slider').slick({
        arrows: true,
        slidesToShow: 2,
        dots:true,
        dotsClass: 'trust_dots',
        swipe: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    variableWidth: false
                }
            }
        ]
    });

    $('.trust_arrl').on('click', function() {
        $('.trust_slider').slick('slickNext');
    });
    $('.trust_arrr').on('click', function() {
        $('.trust_slider').slick('slickPrev');
    });
    
    $('.set_left--item1').hover(function() {
        $('.set_right--1').toggleClass('active');
    });  
    
    $('.set_left--item2').hover(function() {
        $('.set_right--2').toggleClass('active');
    });  
    
    $('.set_left--item3').hover(function() {
        $('.set_right--3').toggleClass('active');
    });  
    
    $('.set_left--item4').hover(function() {
        $('.set_right--4').toggleClass('active');
    });  
    
    $('.set_left--item5').hover(function() {
        $('.set_right--5').toggleClass('active');
    });  
    
    $('.set_left--item6').hover(function() {
        $('.set_right--6').toggleClass('active');
    });  
    
    $('.set_left--item7').hover(function() {
        $('.set_right--7').toggleClass('active');
    });  
    
    $('.set_left--item8').hover(function() {
        $('.set_right--8').toggleClass('active');
    });  
    
    $('.set_left--item9').hover(function() {
        $('.set_right--9').toggleClass('active');
    });  
    
    $('.set_left--item10').hover(function() {
        $('.set_right--10').toggleClass('active');
    });  
    
    $('.set_left--item11').hover(function() {
        $('.set_right--11').toggleClass('active');
    });  

});


