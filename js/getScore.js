var rootRef = new Firebase('https://quicktest-app.firebaseio.com/users');
$('#logIn').click( function(){
  var scoreSnapshot;
  rootRef.once('value', function(snapshot) {
  // store dataSnapshot for use in below examples.
  scoreSnapshot = snapshot.val();
  console.log(scoreSnapshot);

  var $scoreTrack = $('#userscore')
 $scoreTrack.text(scoreSnapshot);
  })
});

$('#userScore').click( function(){
 var scoreRef = rootRef.child('users').child('score');
  scoreRef.update({
  //name for defined variable that stores score at end of game
    "score": 
      });
  } else {
    window.alert("Not Updated");
    }
  
  });
// }


