          
           var rootRef = new Firebase("https://quicktest-app.firebaseio.com"),
           leaderBoardRef = rootRef.child('leaderBoard');
           var email,password,username, userObj = {};
    console.log(rootRef)
//           $(document).ready(function(){
//                $('#login_box').show();
//            });
            //SIGN UP SECTION
            $('#signUp').click( function(){
                //alert('you clicked me');
                email = $('#userEmail').val();
                password = $('#userPassword').val();
                userObj = {email: email, password: password};
                rootRef.createUser(userObj, function(error, userData) {
                  if (error) {
                    console.log("Error creating user:", error);
                    $('#status').append(error);//logs any errors for user
                  } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                    //create user profile following successful signup/authentication
                    var username = email.slice(0, email.indexOf('@')); 
                   // rootRef.onAuth(function(authData){
                      this.window.user = username
                        rootRef.child("users").child(username).set({
                             name: username,
                            score: [0], highScore: 0});
                   // });//end of onAuth
                   leaderBoardRef.child(username).set({
                             name:username, highScore: 0});   
                $('#status').append('<h3>You\'re signed Up!!! Click Login to proceed.</h3>');
//                $('#overlay').toggleClass("turnoff")
                //logs to user that sign up is successful
                  }//end of else
                });//end of refcreateUser
            });//end of signup
            
          //LOGIN SECTION  
            $('#logIn').click( function(){
                //alert('you clicked me');
                email = $('#userEmail').val();
                password = $('#userPassword').val();
                userObj = {email: email, password: password};
                rootRef.authWithPassword(userObj, function(error, authData) {
                    if(error) {
                            console.log("Login failed!", error);
                           $('#status').append(error);//logs any errors for user
                        } else {
                            this.window.user = userObj.email.slice(0, email.indexOf('@'));
                            console.log("Authenticated successfully with payload",authData);
                            //if auth succesful switch to this page
                            //window.location.href="https://google.com"
                            $('#overlay').hide();
                            $('#login_box').hide();
                            $('.greetings').append("Hi! "+this.window.user);
                        }  
                });//end of authWithPassword
            });//end of Login
    
