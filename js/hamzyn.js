$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('down');
  } else {
    $('nav').removeClass('down');
  }
});