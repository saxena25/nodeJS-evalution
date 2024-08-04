const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    id: String,
    title: String,
    category: String,
    difficulty: String,
    description: String,
},{
    versionKey: false
});

const CourseModel = mongoose.model("course",courseSchema);
module.export = CourseModel