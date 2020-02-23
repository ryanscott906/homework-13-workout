const express = require("express");
const db = require("../models");
const app = express();

module.exports = function(app) {
// app.get("/", (req, res) => {
//   db.find({})
//     .then(db => {
//       res.json(db);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.get("exercise/cardio", (req, res) => {
  db.Cardio.find({})
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.json(err);
    })
});

app.get("exercise/resistance", (req, res) => {
  db.Resistance.find({})
    .then(dbResistance => {
      res.json(dbResistance);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("exercise/cardio", ({ body }, res) => {
  db.Cardio.create(body)
    .then(({ _id }) => db.Cardio.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("exercise/resistance", ({ body }, res) => {
  db.Resistance.create(body)
    .then(({ _id }) => db.Resistance.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
    .then(dbResistance => {
      res.json(dbResistance);
    })
    .catch(err => {
      res.json(err);
    });
})
};