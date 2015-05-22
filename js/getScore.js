var myApp = angular.module("myApp", ["firebase"]);

//Use to call back user data
 rootRef.child('users').child(authData.uid).once('value', function(snapshot) {
   if (snapshot.val() === null) {
       console.log("No Users")
   } else {

       var snap = snapshot.val();
        console.log(snap.name, snap.score);
       console.log(snapshot.val())
       //window.alert(snapshot.val())
       //document.write(snapshot.val())
   }
});

 
/*// AngularJS
$scope.authObj.$onAuth(function(authData) {
	var scoreX = rootRef.child("users").child(authData.uid)
  if (authData) {
    console.log(authData.uid +" "+  scoreX);
  } else {
    console.log("Logged out");
  }
});*/


