function search() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://www.googleapis.com/youtube/v3/search?q=" + document.getElementById("search_query").value + "&maxResults=1&part=snippet&key=AIzaSyApfsVygZaxH3C8Z8a_WJoqzyvDy-7OhoU", false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}