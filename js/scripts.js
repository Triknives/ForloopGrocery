var listInput = [];
var userInput = [];


$(document).ready(function(){
  $("#groceryList").submit(function(event){

    var tags = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];

    for (var i = 0; i < tags.length; i++) {
      userInput.push($("#" + tags[i]).val());
    }
      for (var i = 0; i < userInput.length; i++) {
        $("#listDump").prepend("<li>" + userInput[i] + "</li>");

        var answer = userInput.toString();

    }



    event.preventDefault();
  });
});

























//
// var userInput = [];
//
//
// $(document).ready(function(){
//   $("#groceryList").submit(function(event){
//
//     var tags = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", ]
//
//     tags.forEach(function (tag) {
//       userInput.push($("#" + tag).val());
//       console.log(userInput);
//     });
//
//     for (var i = 0; i < tags.length; i++) {
//       userInput.push($("#" + tags[i]).val());
// }
//     // userInput.sort();
//
//     // console.log(userInput);
//     userInput.forEach(function(item){
//       $("#listDump").prepend("<li>" + item + "</li>");
//     });
//     // This var process is needed to allow the use of toUpperCase to take effect.  (Making a string first)
//     // var answer = userInput.toString();
//     // answer = answer.toUpperCase();
//
//     $("#groceryList").hide();
//     $("#listDump").slideToggle("slow");
//
//
//     console.log(answer);
//     event.preventDefault();
//   });
// });
