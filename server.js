const express = require("express");
const session = require("express-session");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path")
const mongoose = require("mongoose");
const MongoStore= require("connect-mongo")(session);
const app = express();
const db = require("./models");
const passport = require("./passport/setup")
const { nextTick } = require("process");
const isAuthenticated = require("./passport/middlware/isAuthenticated")
const dotenv = require("dotenv")

// const databaseUrl = "work";
// const collections = ["Student","Lesson","Move"]

const PORT = process.env.PORT || 3000;
// const db = mongojs(databaseUrl, collections);
app.use(passport.initialize());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//comment 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workdb', { useNewUrlParser: true , useUnifiedTopology:true});
// db.on("error", error => {
//   console.log("Database Error:", error);
// });
app.use(
  session({
    secret:"keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
  })
);

// htmlroutes
app.post("/api/auth/login",passport.authenticate('local'),(req,res)=>{
  console.log({
    username:req.user.username,
    id:req.user.id
  })
  if(req.user){
      res.json({
      username: req.user.username,
      id: req.user._id
    });
  }else{
    res.status(401).send({error: 'Error logging in!'});
  }
  
})



app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send(index.html);
});

app.get("/main",isAuthenticated, (req,res) =>{

    res.sendFile(path.join(__dirname,"./public/main.html"));
  
//comment
})

app.get("/dance", isAuthenticated,  (req, res) => {

  res.sendFile(path.join(__dirname, "./public/dance.html"));
});

app.get("/student", isAuthenticated,  (req, res) => {
  res.sendFile(path.join(__dirname, "./public/student.html"));
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

app.post("/api/students/new/", (req,res) =>{
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
app.delete("/api/lessons/delete/:mouse",(req,res)=>{
  let mouse = req.params.mouse
  db.Lesson.findByIdAndDelete({_id:mouse}).then(dbless=>{
    res.json(dbless)
  }).catch(err=>{
    res.json(err)
  })
})

app.put("/api/lessons/update/",(req,res)=>{
  let param = req.body
  db.Lesson.findByIdAndUpdate({_id: param._id}, {title:param.title,details:param.details},{new:true}).then(dbLess=>{
    res.json(dbLess)
  }).catch(err=>{
    res.json(err)
  })
})

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
app.delete("/api/moves/delete/:mouse",(req,res)=>{
  let mouse = req.params.mouse
  db.Move.findByIdAndDelete({_id:mouse}).then(dbmove=>{
    res.json(dbmove)
  }).catch(err=>{
    res.json(err)
  })
})
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