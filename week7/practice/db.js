const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new  Schema({
    email:{type: String, unique:true},
    password: String,
    userId: ObjectId
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const userModel = mongoose.model("users", User);
const TodoModel = mongoose.model("Todos", Todo);

module.exports= {
    userModel:userModel,
    TodoModel:TodoModel,
}
