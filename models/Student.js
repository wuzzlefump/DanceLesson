const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
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
  lessons: [{ type: Schema.Types.ObjectId,ref: "Lesson"}],
  dances:Array,
  moves:[{ type:Schema.Types.ObjectId,ref:"Move"}]
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;