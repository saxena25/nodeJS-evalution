const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/courseEva";

const connection = mongoose.connect(url);

module.exports = connection