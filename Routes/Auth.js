const express =require("express")
const {Router}= require("express")
const User = require("../modules/User")
const authRoute = Router()

authRoute.post("/signup",async(req,res)=>{
   
    const user=new User(req.body)
    // console.log(user)
   await user.save()  
   res.send("Signup Success")
  })





authRoute.post("/login",async(req,res)=>{
   // const {username,password}=req.body

    const validUser = await User.find(req.body)
   //  console.log(req.body)
   // console.log(validUser[0]._id)
    if(validUser.length<1){
       return  res.send({message:"invalid credential"})
    }
     res.send({message:"login success",_id:validUser[0]._id})
})

module.exports= authRoute