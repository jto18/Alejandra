 $(document).ready(function() {
    $("button").click(function() {
    var bText = $("#bName").val();
    var ageText = $("#bNumber").val();
    $(".bdayName").text(bText);
    $("h2").text(bText);
    $(".bdayNumber").text(ageText);
  }); 
});

 