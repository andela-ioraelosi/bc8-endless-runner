
//Use to call back user data
//var score = nil;
  rootRef.child('users').once('value', function(snapshot) {
    if (snapshot.val() === null) {
       console.log("Invalid Score")
   } else {
        window.scores = snapshot.val();
       console.log(window.scores)
//       console.log(scores['niki'].highScore)
       for (var user in scores){
//           console.log(scores)
        $('#lblist').append('<li>'+ scores[user].name+': '+ scores[user].highScore +'</li>');
       }
       
       //window.alert(snapshot.val())
       //document.write(snapshot.val())
   }
});

 var scoreRef = rootRef.child('users').child(username);
  if (Runner.score > 0){
    alert("Save Session");
  scoreRef.update({
  //name for defined variable that stores score at end of game
    "score": Runner.score
      });
  } else {
    console.log("Not Updated");
    }

  

