function search() {
  query = document.getElementById("search_query").value.split(" by ")
  url = "http://lyric-api.herokuapp.com/api/find/" + query[1] + "/" + query[0]
  return $.getJSON(url, function(result){return result})

}
