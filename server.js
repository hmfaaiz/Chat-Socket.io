const express = require("express")
const app = express()
const user = require("./routes/userRoute")
const dotenv = require("dotenv")
dotenv.config()
const chats = require("./data/data.js")
const connect = require("./configuration/connectdb")

connect();
const cors = require("cors");
app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("Hello") 
// })

// app.get("/api/chat",(req,res)=>{

//     res.status(200).json(chats)


// })
// app.get("/api/chat/:id",(req,res)=>{
//     const find=chats.find((e)=>e._id==req.params.id)
//     res.send(find)
// })

app.use(express.json())
app.use("/api/user", user)

app.listen(process.env.PORT, () => {
    console.log("Port is running")
})


