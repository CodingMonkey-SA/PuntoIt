$(document).ready(function() {
  $('.flex-images').flexImages({
    truncate: true
  });

  $(".slideClickable").on("click", function(e){
    e.preventDefault();
    $("#menuModal").modal();
  });
});
