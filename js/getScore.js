
//Use to call back user data
 rootRef.child('users').child(authData. ).once('value', function(snapshot) {
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

