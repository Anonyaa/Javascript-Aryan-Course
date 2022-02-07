import {default as axios} from 'axios';
var req = new(http.Clientrequest());
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "rVwyuhpJnwRBiwPFofGXSMvSKCD50bJlzIY3QVNL";

req.open("GET", 'https://api.nasa.gov/planetary/apod?api_key=' + 'rVwyuhpJnwRBiwPFofGXSMvSKCD50bJlzIY3QVNL');
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})