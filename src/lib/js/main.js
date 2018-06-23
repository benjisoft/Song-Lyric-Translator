function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyApfsVygZaxH3C8Z8a_WJoqzyvDy-7OhoU');
}

function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#search_query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#response').html('<pre>' + str + '</pre>');
  });
}
