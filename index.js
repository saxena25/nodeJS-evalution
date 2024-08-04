const express = require("express");
const connection = require("./config/db");
const CourseModel = require("./models/course.model");

const server = express();
const PORT = 3000;

server.use(express.json());

server.get("/courses",(req,res)=>{
    res.send("welcome to courses page")
})

server.post("/enroll",(req,res)=>{
    try {
        res.status(201).json({"message": "Successfully enrolled in the course"});
    } catch (error) {
        res.status(404).send(`Error while Enrollment ${error}`);
    }
})

server.post("/cancel-enrollment",(req,res)=>{
    try {
        res.status(201).json({"message": "Successfully canceled enrollment"});
    } catch (error) {
        res.status(404).send(`Error while Canceling Enrollment ${error}`)
    }
})


server.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})