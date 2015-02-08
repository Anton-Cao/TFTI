$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  $('#submitButton').click(function(){
    if($('#password').val() === $('#v_password').val()){
      var user = new Parse.User();
      user.set("username",$('#name').val());
      user.set("password",$('#password').val());
      user.set("email",$('#email').val());
      user.signUp(null, {
        success: function(user) {
          // Hooray! Let them use the app now.
          window.location.href="index.html";
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }else{
      alert("Password does not match");
    }
  });
});
