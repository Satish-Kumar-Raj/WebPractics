const mongoose=require("mongoose")

const details=new mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[{
        lable:String,
        url:String,

    }]
})

module.exports=mongoose.model("details",details)