const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    status: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: false
    },
    cloudinaryId: {
        type: String,
        require: false,
    },
    likes: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = new mongoose.model("Post", PostSchema)