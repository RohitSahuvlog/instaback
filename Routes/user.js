const {Router} =require("express")
const multer =require("multer")
const User = require("../modules/User")
const Feed = require("../modules/Feed")
const userRouter =Router()


const storage = multer.diskStorage({
 
    destination : (req,file,cb)=>{
     return    cb(null,"./uploads")
    },
    filename :(req,file,cb)=>{
        console.log("Filename")
        cb(null,file.originalname)
    }
})

const uploads = multer({storage:storage})



userRouter.get("/:userId/feed",async(req,res)=>{
    const {userId} = req.params;
   const  feeds  = await Feed.find({userid:userId})
//    const imagePath = req.file.image
   return res.send(feeds)


})



userRouter.post("/:userId/feed",uploads.single("image"),async(req,res)=>{
const {title,description,tags}=req.body
const userid =req.params.userId
console.log(userid)
const image = req.body.File
    const feed = new Feed({
        title,
        description,
        tags:tags,
        image,
        userid
    })
    await feed.save()
    return res.send("success")
})
module.exports=userRouter;