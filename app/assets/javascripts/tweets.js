// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function() {
  $('#create-tweet').on('click', function(event) {
    event.preventDefault();
    var str = $('form').serialize();

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: str,

    //   dataType: 'html'
    // }).done(function(data) {
    //   $('.tweets').prepend(data)

      dataType: 'script'
    });
  });
});
