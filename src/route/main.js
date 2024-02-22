const express=require("express");
const hbs=require('hbs')
const routes=express.Router()
const details=require('../models/Details')
routes.get('/',async(req,res)=>{
    const data=await details.findOne({"_id":"65d6b017936e60ca29e0549d"})
    
    res.render("index",{data})
})
routes.get('/gallary',async(req,res)=>{
    const data=await details.findOne({"_id":"65d6b017936e60ca29e0549d"})
    
    res.render("gallary",{data})
})
module.exports=routes