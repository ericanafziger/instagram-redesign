$(document).ready(function() {
  $(".inactive").click(function() {
    var active = $(".active");
    var inactive = $('.inactive');
    $(".signup").toggle();
    $(".login").toggle();
    active.toggleClass('active').toggleClass('inactive');
    inactive.toggleClass('inactive').toggleClass('active');
  });

});
