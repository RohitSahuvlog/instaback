const express = require("express")
const  connection  = require("./Store/db")
const app =express()
const authRouter =require("./Routes/Auth") 
const userRouter =require("./Routes/user") 
const cors = require("cors")
require("dotenv").config()
app.use("./static",express.static("./uploads"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/auth",authRouter)
app.use("/profile",userRouter)


const PORT  = process.env.PORT || 8080

app.get("/",(req,res)=>{

    res.send("get data")
  })
app.listen(PORT,async()=>{
    try{
        await connection
        console.log(" connection to db")
    }catch{
console.log("error in connect to db")
    }
  
    console.log("server will 8080 port ")
})