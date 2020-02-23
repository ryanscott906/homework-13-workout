const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);
module.exports = Resistance;