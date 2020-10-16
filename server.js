const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path")
const mongoose = require("mongoose");
const app = express();
const db = require("./models");
const { nextTick } = require("process");

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
  db.Student.findOne({_id: studid}).populate("moves").populate("lessons").exec((err, dbStudent) =>{
if(err){
  return next(err)
}
if(!dbStudent){
  return res.json(401)
}
res.json(dbStudent)
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
//update Student
app.put("/api/students/update/", (req,res)=>{
  let param = req.body
  console.log(param)
  db.Student.findByIdAndUpdate({_id: param._id},{ name:param.name, bday:param.bday, level: param.level, dances: param.dances, lessons:param.lessons, moves:param.moves},{new:true}).then(dbStud=>{
    res.json(dbStud)
  }).catch(err=>{
    res.json(err)
  })

  
})
//lesson routes
app.post("/api/lessons/new",(req,res)=>{
  console.log(req.body)
  db.Lesson.create({
      title: req.body.title,
      details: req.body.details,
      }).then(({_id})=> db.Student.findOneAndUpdate({_id:req.body.studid},{$push:{lessons: _id}})).then(dbLesson=>{
        res.json(dbLesson)
      }).catch(err=>{
        res.json(err)
      })
      res.status(204);
    })

app.get("/api/lessons/search/:mouse", (req,res)=>{
  let x = req.params.mouse
  db.Lesson.findOne({_id:x}).then(lesson=>{
    res.json(lesson)
  })
})

// move routes
app.post("/api/moves/new",(req,res)=>{
  console.log(req.body)
  db.Move.create({
      name: req.body.name,
      dance: req.body.dance,
      }).then(({_id})=> db.Student.findOneAndUpdate({_id:req.body.studid},{$push:{moves: _id}})).then(dbMove=>{
        res.json(dbMove)
      }).catch(err=>{
        res.json(err)
      })
      res.status(204);
    })
} )
//


// api routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});