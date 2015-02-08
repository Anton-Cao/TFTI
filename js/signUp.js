$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  $('#submitButton').click(function(){
    if($('#password').val() === $('#v_password').val()){
      var user = new Parse.User();

      var fileUploadControl = $("#profilePhotoFileUpload")[0];
      if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = "photo.jpg";

        var parseFile = new Parse.File(name, file);

        parseFile.save().then(function() {
          // The file has been saved to Parse.
        }, function(error) {
          // The file either could not be read, or could not be saved to Parse.
        });

        user.set("ProfilePic",parseFile);
      }

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
