function search() {
  var xmlHttp = new XMLHttpRequest();
  query = document.getElementById("search_query").value.split(" by ")
  xmlHttp.open( "GET", "http://lyric-api.herokuapp.com/api/find/" + query[1] + "/" + query[0], false ); // false for synchronous request
  xmlHttp.send( null );
  return JSON.parse(xmlHttp.responseText)
}
