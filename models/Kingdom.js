let mongoose = require('mongoose')

let kingdomSchema = new mongoose.Schema({
    title: String,
    extract: String,
})

let kingdomModel = mongoose.model('Kingdom', kingdomSchema)
module.exports = kingdomModel