function search() {
  query = document.getElementById("search_query").value.split(" by ")
  url = "http://lyric-api.herokuapp.com/api/find/" + query[1] + "/" + query[0]
  lyrics = $.getJSON(url, function(result){result})["responseJSON"]
  return lyrics
}
