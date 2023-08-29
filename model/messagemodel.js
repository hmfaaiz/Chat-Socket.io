const mongoose = require("mongoose");


const MessageModel = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        content: { type: String, required: true, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "chat" },
    },
    {
        timestamps:true
    }
);

module.exports=model("message",MessageModel)