// Use to store player score on firebase

 var scoreRef = rootRef.child('users').child(username);
 var gameEnd = true
	if (gameEnd === true){
		alert("conditional");
	scoreRef.push({
 	//name for defined variable that stores score at end of game
 		"score": gameScore
  		});
	} else {
		window.alert("Not Updated");
    }


