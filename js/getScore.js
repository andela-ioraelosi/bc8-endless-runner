var rootRef = new Firebase('https://quicktest-app.firebaseio.com/users');
 var authData = rootRef.getAuth();
 var scoreSnapshot;
 if (authData){
  rootRef.once('value', function(snapshot) {
  // store dataSnapshot for use in below examples.
  scoreSnapshot = snapshot.val();
  console.log(scoreSnapshot);
  } 
 

  //var $scoreTrack = $('#userscore')
// $scoreTrack.text(scoreSnapshot);
//});

$('#userScore').click(function(){
 var scoreRef = rootRef.child('users').child(test).child('score');
  scoreRef.update({
  //name for defined variable that stores score at end of game
    "score": 70
      });
  //else {
    //window.alert("Not Updated");
    //}
  
  });
// }


