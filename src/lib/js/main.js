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