
let articleArray = [];
let articleFullString;

function formatAMPM(date) {
  //function to get current time stamp and convert it properly
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "P.M" : "A.M";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const currentTimeStamp = formatAMPM(new Date()); // use this to get current timestamp with AM and PM

console.log(formatAMPM(new Date()));

window.onload = function() {
  const url = window.location.href;
  // alert("This is the url " + url);
  const x = document.querySelectorAll("p");
  x.forEach(node => {
    articleArray.push(node.innerText);
  });
  articleFullString = articleArray.join(", ");
  

  const dataObject = {
    url: url,
    text: articleFullString,
    title: document.title,
    timeVisited: currentTimeStamp
  }

  let dataResponse = [];


  const dataRequest = new XMLHttpRequest();
  dataRequest.open("POST", "http://localhost:3009/api/data", true);
  dataRequest.setRequestHeader("Content-Type", "application/json");
  dataRequest.send(JSON.stringify({ action: dataObject}));
  dataRequest.onreadystatechange = function () { if (dataRequest.readyState == 4) {
    dataResponse.push(JSON.parse(dataRequest.response));
    console.log(dataResponse);
    localStorage.setItem(
      dataResponse[0].title,
      `Time: ${dataResponse[0].timeVisited} || Score: ${
        dataResponse[0].score
      }`
    );
   } }
    
};
