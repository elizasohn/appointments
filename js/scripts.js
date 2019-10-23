$(document).ready(function() {
  $("form#appointments").submit(function(event){

    var nameInput = $("#name").val();
    var reasonInput = $("#reason").val();
    var dateInput = $("#date").val();
    var timeInput = $("#time").val();

    event.preventDefault();

    $(".clientNameInput").text(nameInput);
    $(".clientReasonInput").text(reasonInput);
    $(".clientDateInput").text(dateInput);
    $(".clientTimeInput").text(timeInput);
    
    $("#confirm").show();

  });
});
