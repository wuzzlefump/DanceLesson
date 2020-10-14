const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoveSchema = new Schema({
  Name: String,
  Dance: String
});

const Move = mongoose.model("Move", Move);

module.exports = Move;
