const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



  

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.post("/api/data", function(req, res) {
//     connection.query("INSERT INTO data (body) VALUES (?)", [req.body.body_data], function(
//       err,
//       result
//     ) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
  
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
// });

app.get("/api/data", function(req, res) {
//     connection.query("SELECT * FROM data;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
      res.json(req.body);
//     });
  });  

app.post('/api/data', function(req, res, next){
  console.log(JSON.stringify(req.body.action)); //Your data from the extension
  
});

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
