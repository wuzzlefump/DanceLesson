const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoveSchema = new Schema({
  Name: String,
  Dance: String
});

const Move = mongoose.model("Move", MoveSchema);

module.exports = Move;
