const express = require("express");
const router = express.Router();
const Lesson = require('../models/Lesson.js')

//! GET - homepage displaying ALL Lessons
router.get("/", (req, res) => {
  Lesson.find({}).then(json => {
    res.send(json);
  });
});

//! Click to show and redirect to specific /:id
router.get("/:id", (req, res) => {
  Lesson.findOne({ _id: req.params.id }).then(json => {
    res.send(json);
  });
});

//! Update specific item by ID
router.put("/:id", (req, res) => {
  Lesson.findOneAndUpdate({ _id: req.params.id }, req.body).then(json => {
    res.send(json);
  });
});

//! Create New instance based on model
router.post("/new", (req, res) => {
  Lesson.create({
    date: req.body.date,
    title: req.body.title,
    objective: req.body.objective,
    instructor: req.body.instructor,
    url: req.body.url,
  }).then(json => {
    res.send(json);
  });
});

//! Delete
router.delete("/:id", (req, res) => {
  Lesson.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.send("Delete Success")
  })
});

module.exports = router;
