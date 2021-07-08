$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
    });
});




$("#ticon1").click(function(){
    $(".i-cl1").toggleClass("fa-plus fa-minus");
    $(".tes-h1").toggleClass("c-blue");
    $(".tes-text1").slideToggle();
});

$("#ticon2").click(function(){
    $(".i-cl2").toggleClass("fa-plus fa-minus");
    $(".tes-h2").toggleClass("c-blue");
    $(".tes-text2").slideToggle();
});

$("#ticon3").click(function(){
    $(".i-cl3").toggleClass("fa-plus fa-minus");
    $(".tes-h3").toggleClass("c-blue");
    $(".tes-text3").slideToggle();
});

$("#ticon4").click(function(){
    $(".i-cl4").toggleClass("fa-plus fa-minus");
    $(".tes-h4").toggleClass("c-blue");
    $(".tes-text4").slideToggle();
});

$("#ticon5").click(function(){
    $(".i-cl5").toggleClass("fa-plus fa-minus");
    $(".tes-h5").toggleClass("c-blue");
    $(".tes-text5").slideToggle();
});



$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
          }
        }
      ]
  });