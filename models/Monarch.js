let mongoose = require('mongoose')

let monarchSchema = new mongoose.Schema({

    name: String,
    house: String,
    start: Number,
    end: Number,
    endReason: String, Number,
    kingdom: String,
})

let monarchModel = mongoose.model('Monarch', monarchSchema)
module.exports = monarchModel
