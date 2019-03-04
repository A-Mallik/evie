var content = require("./content")
var story = content.story;
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
// import story from './content.js'

console.log("Here is the story: " + story)
