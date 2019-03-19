const express = require("express");
const PORT = process.env.PORT || 3009;
const app = express();
const Sentiment = require("sentiment");
const sentiment = new Sentiment();

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
  console.log(result);
  
  let newData = {
    url: myData.url,
    score: result.score,
    title: myData.title,
    timeVisited: myData.timeVisited
  }

  res.send(newData)

});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
