// const name = "Oluseye Lamina";
// let age = 39; 
// let forvorite_prog_lang = "Javascript"
// console.log("My name is " + name + " and I am " + age + "my best programming lang is " + forvorite_prog_lang);

const express = require('express'); 
const app = express(); 
const port = 3000

app.use(express.json()); 

app.get('/', (req,res)=>{
    res.send("My week 2 API")
})

app.get('/user/:id', (req, res)=>{
    let id = req.params.id; 
    console.log(id);
    res.send(id)
})

app.post('/user', (req,res)=>{
    const result = req.body; 
    console.log(result);
    res.send(result)
})



app.listen(port, ()=>{
    console.log(`Server is currently running on port ${port}`);
})