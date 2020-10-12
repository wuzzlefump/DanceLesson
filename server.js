const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "work";
const collections = ["students"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});
// htmlroutes
app.get("/", (req, res) => {
  res.send(index.html);
});
app.get("/dance", (req, res) => {
  res.sendFile(path.join(__dirname, "../DanceLesson/public/dance.html"));
});
app.get("/student", (req, res) => {
  res.sendFile(path.join(__dirname, "../DanceLesson/public/student.html"));
});

//html routes




app.listen(3000, () => {
  console.log("App running on port 3000!");
});
