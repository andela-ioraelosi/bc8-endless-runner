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
};

