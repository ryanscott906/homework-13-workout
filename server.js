const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
process.env.MONGODB_URI = 'mongodb://<user1>:<password1>@ds217548.mlab.com:17548/heroku_st2wrcpc'
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});