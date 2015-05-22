
 rootRef.child('users').once('value', function(snapshot) {
     if (snapshot.val() === null) {
       console.log("Invalid Score")
   } else {
       // $('#list').append('<li>'+ i:+' '+ object[i] +'</li>');
        console.log(snapshot.val())
       //window.alert(snapshot.val())
       //document.write(snapshot.val())
   }
});

 var scoreRef = rootRef.child('users').child(username);
  if (runner.score === true){
    alert("Save Session");
  scoreRef.push({
  //name for defined variable that stores score at end of game
    "score": runner.score
      });
  } else {
    console.log("Not Updated");
    }
  


