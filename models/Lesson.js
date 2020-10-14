const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  title: String,
  details: String,
});

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
