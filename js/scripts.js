$(function() {
  $("form#luck-survey").submit(function(event){
    event.preventDefault();
    var responses = ["dinosaur", "tea", "elevator", "beanie", "plant"];
    var luckyCount = [];
    var unluckyCount = [];

    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyResponse = $(this).val();
    });
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unluckyResponse = $(this).val();
    });

    
  });
});
