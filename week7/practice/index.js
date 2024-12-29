const express = require("express");
const mongoose = require("mongoose");
const {userModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const {auth, JWT_SECRET} = require("./auth");

mongoose.connect("mongodb+srv://rahulsonar28803:ugEVVbJH3E9dt2cO@cluster0.fzcdq.mongodb.net/rahul_todo");
const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){

    const email=req.body.email;
        const password= req.body.password;
        const name=req.body.name;

      await userModel.create({
            email:email,
            password:password,
            name:name
    })
    res.json({
        message: "you are logged in"
    })
});

app.post("/signin", async function(req, res){
  const email = req.body.email;
  const password =  req.body.password;
 const user =  await userModel.findOne({
        email:email,
        password:password
  });
  console.log(user);

   if(user){
      const token =jwt.sign({
        id:user._id,
      },JWT_SECRET)
      res.json({
        token:token,
      })
   } else{
    res.status(403).json({
        message:"invalid credencial"
    })
   }
});

app.post("/todo", auth, async function(req,res){
  const userId = req.body.userId;
  const title = req.body.title;
  const done = req.body.done;
  await TodoModel.create({
    title:title,
    done:done,
    userId:userId
   })
   res.json({
    message: "Todo is created"
   })
     
});

app.get("/todos", auth, async function(req,res){
   const userId = req.userID;
   const todos = await TodoModel.find({
    userId
   })
   res.json({
    todos
   })
});

app.listen(3000);