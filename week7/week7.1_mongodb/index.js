const express = require("express");
const {UserModel,TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const  mongoose  = require("mongoose");
const {auth ,JWT_SECRET } = require("./auth");
const bcrypt = require("bcrypt");
const {z } = require("zod");

mongoose.connect("mongodb+srv://rahulsonar28803:ugEVVbJH3E9dt2cO@cluster0.fzcdq.mongodb.net/todo-rahul");
const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){
    //check that the password has 1 uppercase,1 spacial case;
    const requiredBody = z.object({
        email:z.string().email(),
        name: z.string(),
        password:z.string()
    })
    let errorThrown = false;
    // const parseData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Incorrect Format",
            error: parsedDataWithSuccess.error
        })
        return 
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    try{
    const hashPassword = await bcrypt.hash( password,5);
    console.log(hashPassword);
      await  UserModel.create({
            email:email,
            password:hashPassword,
            name:name

        })
    } catch(e){
        res.json({
            message:"user aleady exists"
            
        });
        errorThrown = true
    }
    if(!errorThrown){
        res.json({
            message:"you are logged in"
        })
    }
});
app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user= await UserModel.findOne({
        email:email,
    })
    if(!user){
        res.status(403).json({
            message:"User does not exist in our db"
        })
        return;
    }
     const passwordmatch = await bcrypt.compare(password,user.password);


    if(passwordmatch) {
        const token =jwt.sign({
            id: user._id,
        },JWT_SECRET);
        res.json({
            token:token
        });
    } else {
        res.status(403).json({
            message:"Incorrect credentials"
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

})
app.get("/todos", auth, async function(req,res){
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId
    })
   res.json({
    todos
   })
});


app.listen(3000);