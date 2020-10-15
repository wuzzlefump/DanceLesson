const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoveSchema = new Schema({
  name: String,
  dance: String
});

const Move = mongoose.model("Move", MoveSchema);

module.exports = Move;
