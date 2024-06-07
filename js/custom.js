$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500, 
        arrows: false,
        dots: true,
      });
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500, 
        arrows: true,
        prevArrow: `<i class="fa-solid fa-chevron-left left"></i>`,
        nextArrow: `<i class="fa-solid fa-chevron-right right"></i>`,
        centerMode: true,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1199.99,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 991.99,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 767.99,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 575.99,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

 
})
// wow js
new WOW().init();
