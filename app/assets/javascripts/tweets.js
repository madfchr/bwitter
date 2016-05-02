// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function() {
  $('#new_tweet').submit(function(event) {
    event.preventDefault();
    var tweet = $('tweet_message').serialize();

    $.ajax({
      url: '/tweets?' + tweet
      type: 'GET'
      dataType: 'html'
    }).done(function(data) {
      $('products').html(data);
    });
  });
});
