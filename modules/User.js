const {Schema,model}=require("mongoose")

const UserSchema = new Schema({

    name:String,
    userName:String,
    email:String,
    password:String,// never store a password in db
    mobile:Number,
    Country:String,
    gender:{
        type:"String",
        enum:["Male","female","Unspecied"]
    }

})

const User = model("user",UserSchema)
module.exports = User
