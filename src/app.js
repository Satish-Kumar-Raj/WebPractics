const express=require('express')
const routes = require('./route/main')
const mongoose=require('mongoose')
const hbs=require('hbs')
const details=require('./models/Details')
// const connectDB = require('./utils/db')


const app=express()

app.use('/static',express.static('public'))
app.use('',routes)
// template engine
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials("views/partials")
// setup static file


app.listen(process.env.PORT || 3000,()=>{
    
        try{
            const res= mongoose.connect(`mongodb+srv://satishkumarrajbhar679:satish123@cluster0.ex2emdk.mongodb.net/tut`)
            // console.log(process.env.MONGODB_URI)
            console.log(`\n MongoDB connected !! DB HOST: ${res}`);
            // details.create({
            //     brandName:"Info Technical Solution",
            //     brandIconUrl:"https://pngbuy.com/wp-content/uploads/2023/04/Gautama-Buddha-PNG-Photo.png",
            //     links:[{
            //         label:"Home",
            //         url:"/"
            //     },{
            //         label:"About",url:"/about"
            //     },{
            //         label:"Service",url:"/services"
            //     }]
            // })
        }catch(error){
            console.log("Connection Failed",error)
            process.exit(1)
        }
    
    
    console.log("Server Started")
})

