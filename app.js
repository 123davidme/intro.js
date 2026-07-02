
const express = require('express'); 
const app = express(); 
app.use(express.json()); 

let database = [
    {id: 1, task: "Learn Node.js", completed: false}, 
    {id: 2, task: "Build CRUD API", completed: false}
]
const port = 3000

app.get("/todo", (req,res)=>{
    res.status(200).json(database)
})
app.post("/todo", (req,res)=>{
    const newTodo = {id: database.length+1, ...req.body}
    database.push(newTodo)
    res.status(200).json(newTodo)
})