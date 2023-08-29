const mongoose = require("mongoose")

const ChatModel = mongoose.Schema(
    {
        chatName: { trype: String, require: true },
        isGroup: { type: Boolean, default: false },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user", },],
        latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "message" },
        groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    },

    {
        timestamps: true,
    }

);

module.exports=mongoose.model("chat",ChatModel)


