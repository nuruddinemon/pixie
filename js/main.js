// owl carousel for products
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        lazyLoad:true,
        loop:true,
        dots:true,
        autoplay:true,
        margin:20,
        responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                }
            }
    });
});

// products page for featured items 
$(document).ready(function(){
    var mixer = mixitup('.featured');
});

// product sliders
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  })