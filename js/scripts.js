$(function() {
  $("form#luck-survey").submit(function(event){
    event.preventDefault();
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

    if(luckyCount.length > unluckyCount.length) {
      $("#luckyOutput").show();
    } else if(unluckyCount.length > luckyCount.length) {
      $("#unluckyOutput").show();
    } else if(unluckyCount.length === luckyCount.length) {
      $("#neutralOutput").show();
    }
  });
});
