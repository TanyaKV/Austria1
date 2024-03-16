$(function(){
    
      
    $('.travel__boxs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade:true,
        asNavFor: '.travel__sliders',
        responsive: [
            {
                breakpoint: 1161,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-right.svg" alt=""></button>'
                }
            }
        ]
    });

    $('.travel__sliders').slick({
        slidesToShow:11,
        slidesToScroll:1,
        arrows: false,
        asNavFor: '.travel__boxs',
        focusOnSelect: true,        
});

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.castles'
        }
    });
});
