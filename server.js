const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path")
const mongoose = require("mongoose");
const app = express();
const db = require("./models")
// const databaseUrl = "work";
// const collections = ["Student","Lesson","Move"]

const PORT = process.env.PORT || 3000;
// const db = mongojs(databaseUrl, collections);
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workdb", { useNewUrlParser: true });

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

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

//get routes
//find students
app.get("/api/students", (req,res)=>{
db.Student.find({}).then(dbStudent=>{
  res.json(dbStudent)
}).catch(err=>{
  res.json(err)
})
})

app.get("/api/students/search/:mouse",(req,res)=>{
let studid = req.params.mouse
  db.Student.findOne({_id: studid}).then(dbStudent =>{
    res.json(dbStudent)
  }).catch(err=>{
    res.json(err)
  })
})
//get routes

//post routes
//create student
app.post("/api/students/new",(req,res)=>{
    db.Student.create(
        {name: req.body.name,
        bday: req.body.bday,
        level:req.body.level,
        dances:req.body.dances,
        lessons:[],
        moves:[]
        })
        res.status(204);
} )
//add lesson
//add moves
//post routes
// api routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
