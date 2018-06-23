function search() {
  query = document.getElementById("search_query").value.split(" by ")
  url = "http://benbot-translator.herokuapp.com/api/find/" + query[1] + "/" + query[0]

  $.ajax({
    type: "GET",
    data: {
        apikey:"a2cb19040a4a1174fc3ccea1a22d622c",
        q_artist: query[1],
        q_track: query[0],
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
      console.log(data)
    }})
  }