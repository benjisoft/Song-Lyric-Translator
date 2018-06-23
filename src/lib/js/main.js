function search() {
  query = document.getElementById("search_query").value.split(" by ")
  query2 = document.getElementById("search_query").value.split(" in ")
  lang = query2[1]
  url = "http://lyric-api.herokuapp.com/api/find/" + query[1] + "/" + query[0]
  lyrics = $.getJSON(url, function(result){result})["responseJSON"]
  return lyrics
}

// if (lang == "French" || "french") {langkey = "fr"}
// else if (lang == "Spanish" || "spanish") {langkey = "es"}

lyrics = "hey dude"
langkey = "fr"

function trans() {
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://translation.googleapis.com/language/translate/v2?q=" + lyrics + "&target=" + langkey + "&key=AIzaSyApfsVygZaxH3C8Z8a_WJoqzyvDy-7OhoU", false ); // false for synchronous request
    xmlHttp.send( null );
    rawdata = xmlHttp.responseText;
    data = JSON.parse(rawdata);
    console.log(data)
    return xmlHttp.responseText;
/*  url = "https://translation.googleapis.com/language/translate/v2?q=" + lyrics + "&target=" + langkey + "&key=AIzaSyApfsVygZaxH3C8Z8a_WJoqzyvDy-7OhoU"
  // tlyrics = $.getJSON(url, function(result){result})["responseJSON"]
  return tlyrics */
}
