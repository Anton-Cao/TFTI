$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  var currentUser = Parse.User.current();
  if(currentUser){
    $('.notLoggedIn').fadeOut(0);
    $('.loggedIn').fadeIn(0);
    $('#usernameText').text(currentUser.get("username"));
  }else{
    $('.notLoggedIn').fadeIn(0);
    $('.loggedIn').fadeOut(0);
  }

  var cookie = document.cookie;
  cookie = cookie.substring(6,cookie.length);
  var party;
  var title;
  var address;
  var desc;
  var price;

  console.log(cookie);

  var Parties = Parse.Object.extend("Parties");
  var query = new Parse.Query(Parties);
  query.equalTo("Title", cookie);
  query.find({
    success: function(results) {
      // Do something with the returned Parse.Object values
      party = results[0];
      var photo = party.get("Image");
      $("#pic_party").attr("src",photo.url());
      console.log(photo.url());

      $('#party_name').text(party.get("Title"));
      $('#party_address').text(party.get("Address"));
      $('#party_desc').text(party.get("Description"));
      price = party.get("DollarsPerPerson");

      var User = Parse.User();
      var query = new Parse.Query(User);
      query.get(party.get("Host"), {
      success: function(host) {
        // The object was retrieved successfully.
        $("#host_name").text(host.get("username"));
        
      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });


    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

});
