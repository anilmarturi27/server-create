const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const Schema =require("./model")
const { schema } = require("./model")
const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
mongoose.connect("mongodb+srv://aniani:aniani@cluster0.l9p8zqy.mongodb.net/?retryWrites=true&w=majority").then(
console.log("db connected"))

app.post("/anani",async(req,res)=>{
    try{
        const{key,name,email} = req.body
        const newdata = new Schema({
            key,name,email
        })
        await newdata.save()
        res.send("data posted successfully")
    }
    catch(err){
        console.log(err)
    }

})

app.get("/:id",async(req,res)=>{
    try{
        let exist = await Schema.findById(req.params.id)

        console.log(exist)
        const anil=JSON.parse(JSON.stringify(exist))

        anil.phno="9988776655"
        console.log(anil)

        res.send("fetched successfully")
    }
    catch(err){
        console.log(err)
    }
})

app.listen(3000,()=>{
    console.log("server running...")
})