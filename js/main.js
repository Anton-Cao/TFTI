$(document).ready(function(){
  Parse.initialize("VLQWsrqnc7SxqENlnzi1zsoBLCJZIhLbdPIFGH05", "Oj0yEW977q1A0174sWCTk8IbzP5sCcoWZO1pKpB4");
  var currentUser = Parse.User.current();
  if(currentUser){
    $('.notLoggedIn').fadeOut(0);
    $('.loggedIn').fadeIn(0);
    $('#username').text(currentUser.get("username"));
  }else{
    $('.notLoggedIn').fadeIn(0);
    $('.loggedIn').fadeOut(0);
  }

  $('#logOut').click(function(){
    Parse.User.logOut();
    window.location.href='index.html';
  });
});
