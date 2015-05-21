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


// AngularJS
$scope.authObj.$onAuth(function(authData) {
	var scoreX = rootRef.child("users").child(authData.uid)
  if (authData) {
    console.log(authData.uid +" "+  scoreX);
  } else {
    console.log("Logged out");
  }
});



//Use to call back user data
 rootRef.child('users').child(authData.uid).once('value', function(snapshot) {
   if (snapshot.val() === null) {
       console.log("No Users")
   } else {

       console.log(snapshot.val())
       window.alert(snapshot.val())
       //document.write(snapshot.val())
   }
});

// Using an event listener to trigger  this
rootRef.child('users').child(authData.uid/* username */).once('value', function(snapshot) {
   if (snapshot.val() === null) {
       console.log("No Users")
   } else {

       console.log(snapshot.val())
       //window.alert(snapshot.val())
       //document.write(snapshot.val())
   }
});


// Use to store player score on firebase

                    //var saveScore = function() {
                      var scoreRef = rootRef.child('users').child(authData.uid/* username */);
                      var gameEnd = true
                        if (gameEnd === true){
                          alert("conditional");
                              scoreRef.push({
                               //name for defined variable that stores score at end of game
                                "nick name": "Opizzasadder"
                                });
                                } else {
                                window.alert("Not Updated");
                                }
  
                    };

                   // }

// initial code
var saveScore = function() {
	var gameEnd = true
	var scoreRef = rootRef.child('users').child(authData.uid/* username */).once('value', function(snapshot);
		(gameEnd === true){
			scoreRef.update({
				//name for defined variable that stores score at end of game
				"nick name": "Opizza"
			};
		}
};



//call back to validat data save
dataRef.set("I'm writing data", function(error) {
  if (error) {
    alert("Data could not be saved." + error);
  } else {
    alert("Data saved successfully.");
  }
});