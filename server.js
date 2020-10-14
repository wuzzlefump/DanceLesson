const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path")
const mongoose = require("mongoose");
const app = express();
// const db = require("./models")
const databaseUrl = "work";
const collections = ["Student","Lesson","Move"]

const PORT = process.env.PORT || 3000;
const db = mongojs(databaseUrl, collections);
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workdb", { useNewUrlParser: true });

db.on("error", error => {
  console.log("Database Error:", error);
});

;
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

//api routes
app.post("/api/students/new",(req,res)=>{
    db.Student.save(
        {name: req.body.name,
        bday: req.body.bday,
        level:req.body.level,
        dances:req.body.dances,
        lessons:[],
        moves:[]
        })
        res.status(204);
} )
// api routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
