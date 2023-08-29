const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config()
const connectdb=()=>{
   
        mongoose.connect(process.env.db_URL)
        .then(()=>{
            console.log("Connected")
        })
        
 
    .catch((err)=>{
        console.log("Not connected",err)
    })
   
}


module.exports=connectdb;