const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field

const Lesson = new Schema({
  date: String,
  title: String,
  objective: String,
  instructor: String,
  url: String,
});

// builds a model from the schema, and attaches it to our mongoose instance.
// a model is used to query and change data in the database....

module.exports = mongoose.model("Lesson", Lesson);
