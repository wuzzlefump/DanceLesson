const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  bday:{
      type: String,
  },
  level:{
    type: String,
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson"
    }
  ],
  Dances:Array,
  moves:[{
    type:Schema.Types.ObjectId,
    ref:"Move"
  }]
});

const Student = mongoose.model("Student", Student);

module.exports = Student;