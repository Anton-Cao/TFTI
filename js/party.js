$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");

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
      $("#pic_party").src = photo.url();
      console.log(photo.url());

      $('#party_name').text(party.get("Title"));
      $('#party_address').text(party.get("Address"));
      $('#party_desc').text(party.get("Description"));
      price = party.get("DollarsPerPerson");
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

});
