// import 'sentiment.js'

var articleArray = [];
// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
window.onload = function () {
    var url = window.location.href;
    alert("This is the url " + url);
    var x = document.querySelectorAll("p");
    x.forEach((node) => {
        articleArray.push(node.innerText);
    });
   console.log(articleArray);
    // var story = articleArray.join(", ");
    // console.log("Here is the story " + story);
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
  
  



// }