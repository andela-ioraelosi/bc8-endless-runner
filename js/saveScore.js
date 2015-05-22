// Use to store player score on firebase

 //var saveScore = function() {
 var scoreRef = rootRef.child('users').child(username);
 var gameEnd = true
	if (gameEnd === true){
		alert("conditional");
	scoreRef.update({
 	//name for defined variable that stores score at end of game
 		"score": 
  		});
	} else {
		window.alert("Not Updated");
		}
  
	};
// }


