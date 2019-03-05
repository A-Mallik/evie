const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3009;
const app = express();
const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const store = require('store')

dataObject = (url, sentimentScore, title, timeVisited) => {
  this.url = url;
  this.sentimentScore = sentimentScore;
  this.title = title;
  this.timeVisited = timeVisited;
};
//definition for running localstorage from node-localstorage
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/data", function(req, res) {
  res.json(req.body);
});

app.post("/api/data", function(req, res, next) {
  let myData = req.body.action;
  let result = sentiment.analyze(myData.text);
  
  let newData = {
    url: myData.url,
    score: result.score,
    title: myData.title,
    timeVisited: myData.timeVisited
  }

  // console.dir(newData)

  store.set('sentiment', { title: newData.title});

  localStorage.setItem("title", newData.title);
  localStorage.setItem("url", newData.url);
  localStorage.setItem("score", newData.score);
  localStorage.setItem("timeVisited", newData.timeVisited);
  // console.log(JSON.stringify(req.body.action)); // data from the extension

  // console.dir(result); //
  // console.log( "This is the score by itself" + result.score);
  // localStorage.setItem("myFirstKey", result.score);
  console.log(localStorage.getItem('title'));
  console.log(localStorage.getItem('url'));
  console.log(localStorage.getItem('score'));
  console.log(localStorage.getItem('timeVisited'));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
