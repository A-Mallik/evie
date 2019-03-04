// document.addEventListener("DOMContentLoaded", function(event) { 
  //do work

// import { O_RDWR } from "constants";

// import 'sentiment.js'

var articleArray = [];
// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
window.onload = function () {
    var url = window.location.href;
    // alert("This is the url " + url);
    var x = document.querySelectorAll("p");
    x.forEach((node) => {
        articleArray.push(node.innerText);
    });
   console.log(JSON.stringify(articleArray));
  //  $.post("/api/data", articleArray, function() {
    
  // }).then(function(articleData) {
  //     res.json(articleData);
  //   });
 


    // var story = articleArray.join(", ");
    // console.log("Here is the story " + story);
    // localStorage.setItem('items', JSON.stringify(articleArray));

// $.ajax({
//   type: "POST",
//   url: '/api/data',
//   data: "yes"
// });


var dataRequest = new XMLHttpRequest();
dataRequest.open("POST", "http://localhost:3001/api/data", true);
dataRequest.setRequestHeader("Content-Type", "application/json");
dataRequest.send(JSON.stringify({ action: articleArray}));
dataRequest.onreadystatechange = function () { if (dataRequest.readyState == 4) { console.log(dataRequest.responseText); } }
}  




// var story = articleArray.join(", ");

// console.log(articleArray)

// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();

// var result = sentiment.analyze(story);

// console.dir(result);


// window.onload = () => {
//   // const $startButton = document.querySelector('.start');

//   // $startButton.onclick = () => {
//   //   // Get active tab
//   //   chrome.tabs.query({
//   //     active: true,
//   //     currentWindow: true,
//   //   }, (tabs) => {
//   //     // Send message to script file
//   //     chrome.tabs.sendMessage(
//   //       tabs[0].id,
//   //       { injectApp: true },
//   //       response => window.close()
//   //     );
//   //   });
//   // };

//   var articleArray = [];
//   // var Sentiment = require('sentiment');
//   // var sentiment = new Sentiment();

//       var url = window.location.href;
//       alert("This is the url " + url);
//       var x = document.querySelectorAll("p");
//       x.forEach((node) => {
//           articleArray.push(node.innerText);
//       });
//     console.log(articleArray);
//       // var story = articleArray.join(", ");
//       // console.log("Here is the story " + story);
  
  

// });

// }