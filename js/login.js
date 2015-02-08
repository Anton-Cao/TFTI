$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  $('#submitButton').click(function(){
    Parse.User.logIn($('#username').val(), $('#password').val(), {
      success: function(user) {
        // Do stuff after successful login.
        // alert("You are logged in!");
        // var currentUser = Parse.User.current();
        // if(currentUser){
        //   console.log(currentUser.get("username"));
        // }else{
        //   console.log("not logged in");
        // }
        window.location.href="index.html";
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("Login failed");
      }
    });
  });
});
