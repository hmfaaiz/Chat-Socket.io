const mongoose = require("mongoose")

const UserModel =new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: {
            type: String,
            default: "https://www.seekpng.com/png/full/202-2024994_profile-icon-profile-logo-no-background.png"
        },
    },

    {
        timestamps:true
    }
);

module.exports=mongoose.model("user",UserModel)