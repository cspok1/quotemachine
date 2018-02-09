function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var responseJSON = JSON.parse(this.response);
     console.log(responseJSON.quote);
     var span = document.getElementById("demo");
     var by = document.getElementById("by");
     var link = document.getElementById("link")

     span.innerHTML = responseJSON.quote
     by.innerHTML = responseJSON.author
     link.innerHTML = responseJSON.permalink

    }
  };
  xhttp.open("GET", "http://quotes.stormconsultancy.co.uk/random.json", true);
  xhttp.send();
}