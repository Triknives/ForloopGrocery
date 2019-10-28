var listInput = [];
var userInput = [];


$(document).ready(function(){
  $("#groceryList").submit(function(event){

    var tags = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", ]

    tags.forEach(function (tag) {
      userInput.push($("#" + tag).val());
    });

    userInput.sort();

    // console.log(userInput);
    userInput.forEach(function(item){
      $("#listDump").prepend("<li>" + item + "</li>");
    });

    var answer = userInput.toString();
    answer = answer.toUpperCase();

    $("#groceryList").hide();
    $("#listDump").slideToggle("slow");


    console.log(answer);
    event.preventDefault();
  });
});
