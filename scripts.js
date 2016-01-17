$(document).ready(function() {
  $('#pagepiling').pagepiling({
    direction: 'vertical',
    anchors:['index', 'menu', 'nosotros', 'contacto']
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
