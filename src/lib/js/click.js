var input = document.getElementById("search_query");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("buttons").style.display = "block";
        search()
    }
});