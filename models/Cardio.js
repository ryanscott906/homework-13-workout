const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String
  },
  distance: {
    type: Number
  },
  duration: {
    type: Number
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);
module.exports = Cardio;