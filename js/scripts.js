$(function() {
  $("form#luck-survey").submit(function(event){
    event.preventDefault();
    var responses = ["dinosaur", "tea", "elevator", "beanie", "plant"];
    var luckyCount = [];
    var unluckyCount = [];

    console.log("luckyCount", luckyCount);
    console.log("unluckyCount", unluckyCount);

    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyResponse = luckyCount.push($(this).val());
      console.log("luckyResponse", luckyResponse);
    });
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unluckyResponse = unluckyCount.push($(this).val());
      console.log("unluckyResponse", unluckyResponse);
    });
  });
});
