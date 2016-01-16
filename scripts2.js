$(document).ready(function() {
  $('#pagepiling').pagepiling({
    direction: 'horizontal',
  });

  $(".slickAble").owlCarousel({
    autoplay:true,
    autoplaySpeed: 450,
    smartSpeed: 500
  });

  $(".slideClickable").on("click", function(e){
    e.preventDefault();
    $("#menuModal").modal();
  });

});
