$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  var currentUser = Parse.User.current();

  var Party = Parse.Object.extend("Parties");

  if(!currentUser){
    console.log("no user");
    window.location.href="login.html";
  }

  $('#usernameText').text(currentUser.get("username"));

  $("#submitButton").click(function(){
    console.log("clicked");

    var party = new Party();

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

      party.set("Image",parseFile);
    }



    party.set("Title",$("#partyName").val());
    party.set("Date",$("#date").val());
    party.set("Address",$("#address").val());
    party.set("DollarsPerPerson",parseInt($("#dollarsPerPerson").val()));
    party.set("MinPeople",parseInt($("#minPeople").val()));
    party.set("MaxPeople",parseInt($("#maxPeople").val()));
    party.set("Description",$("#description").val());
    party.set("Host",currentUser);

    party.save(null, {
      success: function(party) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + party.id);
      },
      error: function(party, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  });

  $('#logOutButton').click(function(){
    Parse.User.logOut();
    window.location.href='index.html';
  });

});
