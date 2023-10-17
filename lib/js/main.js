function trans(data) {
  console.log(data)
  console.log(lang)
  if (lang == "french") {
    langkey = "fr"
  }
  if (lang == "english") {
    langkey = "en"
  }
  if (lang == "german") {
    langkey = "de"
  }
  if (lang == "chinese") {
    langkey = "zh"
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
      "GET",
      "https://translation.googleapis.com/language/translate/v2?q=" + data +
          "&target=" + langkey + "&key=AIzaSyApfsVygZaxH3C8Z8a_WJoqzyvDy-7OhoU",
      false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(
      xmlHttp.responseText)["data"]["translations"][0]["translatedText"];
}

function search() {
  query =
      document.getElementById("search_query").value.toLowerCase().split(" in ")

  lang = query[1]
  $.ajax({
    type : "GET",
    data : {
      apikey : "a2cb19040a4a1174fc3ccea1a22d622c",
      q_track : query[0],
      format : "jsonp",
      callback : "jsonp_callback"
    },
    url : "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
    dataType : "jsonp",
    jsonpCallback : 'jsonp_callback',
    contentType : 'application/json',
    success : function(data) {
      lyrics =
          data["message"]["body"]["lyrics"]["lyrics_body"].split("*******")[0]
      document.getElementById("response").innerHTML = (trans(lyrics))
      document.getElementById("original").innerHTML = (lyrics)
    }
  })
}
