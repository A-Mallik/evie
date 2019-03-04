dataObject = (url, sentimentScore, title, timeVisited) => {
  // prototype for the data,
  //currently not being used because we have to figure out how to get the title now. E
  //verything else we can pretty much get.
  this.url = url;
  this.sentimentScore = sentimentScore;
  this.title = title;
  this.timeVisited = timeVisited;
};

var articleArray = [];
var articleFullString;

function formatAMPM(date) {
  //function to get current time stamp and convert it properly
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "P.M" : "A.M";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

let currentTimeStamp = formatAMPM(new Date()); // use this to get current timestamp with AM and PM

console.log(formatAMPM(new Date()));

window.onload = function() {
  var url = window.location.href;
  // alert("This is the url " + url);
  var x = document.querySelectorAll("p");
  x.forEach(node => {
    articleArray.push(node.innerText);
  });
  articleFullString = articleArray.join(", ");
  // console.log(articleArray); //but how do we get the title specifically? Im open to any suggestions
  // console.log("Here is the title: " + document.title)

  const dataObject = {
    url: url,
    text: articleFullString,
    title: document.title,
    timeVisited: currentTimeStamp
  }

  // console.table(articleFullString)

  var dataRequest = new XMLHttpRequest();
  dataRequest.open("POST", "http://localhost:3009/api/data", true);
  dataRequest.setRequestHeader("Content-Type", "application/json");
  dataRequest.send(JSON.stringify({ action: dataObject}));
  dataRequest.onreadystatechange = function () { if (dataRequest.readyState == 4) { console.log(dataRequest.responseText); } }
    
};
