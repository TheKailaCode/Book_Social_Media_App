const mongoose = require('mongoose')

const TBRSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    complete: false,
    cover: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model("Book", TBRSchema)