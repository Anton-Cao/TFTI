$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  var currentUser = Parse.User.current();
  console.log("hi");
  if(!currentUser){
    console.log("no user");
    window.location.href="login.html";
  }

  $("#submitButton").click(function(){
    
  });

});
