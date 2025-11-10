const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    key:{
        type: String,
        require : true
    },
    name:{
        type: String,
        require : true
    },
    email:{
        type: String,
        require : true,
        unique : true
    }
})

module.exports = mongoose.model("Schema",Schema)