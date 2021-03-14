let mongoose = require('mongoose')
let monarchJson = require('../data/monarchRaw.json')
let monarchModel = require('../../models/Monarch.js')
let kingdomJson = require('../data/kingdomRaw.json')
let kingdomModel = require('../../models/Kingdom.js')
// const {deleMany} = require('')


let destructureMonarch =
    ({ name, house, start, end, endReason, kingdom }) =>
        ({ name, house, start, end, endReason, kingdom })

let destructuredMonarch = monarchJson.map(destructureMonarch)

console.log(monarchJson.map(destructureMonarch))

monarchModel
    .deleteMany({})
    .then(() => monarchModel.create(destructureMonarch))
    .then(mongoose.disconnect)
    .then(() => console.log("Done!"))

let destructureKingdom =
    ({ title, extract }) =>
        ({ title, extract})

let destructuredKingdom = kingdomJson.map(destructureKingdom)

console.log(kingdomJson.map(destructureKingdom))

monarchModel
    .deleteMany({})
    .then(() => kingdomModel.create(destructureKingdom))
    .then(mongoose.disconnect)
    .then(() => console.log("Done!"))