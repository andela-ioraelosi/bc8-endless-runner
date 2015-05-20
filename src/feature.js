var myApp = angular.module("myApp", ["firebase"]);

/*if(game.end === true){
	$scope.push();
}

var list = $firebaseArray(ref);
list.$add({ foo: "bar" }).then(function(ref) {
  var id = ref.key();
  console.log("added score with id " + id);
  list.$indexFor(id); // returns location in the array
});*/


var scoreX = rootRef.child("Users").child(authData.uid).child("score")
$scope.authObj.$onAuth(function(authData) {
  if (authData) {
    console.log(authData.uid +" "+  scoreX);
  } else {
    console.log("Logged out");
  }
});