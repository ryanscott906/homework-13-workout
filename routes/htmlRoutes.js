var express = require("express");
var path = require("path");
const app = express();

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  })
};


