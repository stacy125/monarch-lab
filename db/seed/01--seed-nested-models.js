let mongoose = require('mongoose')
const kingdomModel = require("../../models/Kingdom");
let kingdomJson = require('../data/kingdomRaw.json')
const monarchModel = require("../../models/Monarch");
let monarchJson = require('../data/monarchRaw.json')

monarchModel.find({})
    .then(monarchs => {
        for(let i of name) {
            kingdomModel.findOne({
                title: monarch.kingdom
            })
            .then(kingdom => {
                monarch.kingdom = kingdom
                monarch.save()
            })
            console.log(i);
            console.log(kingdom);
        }
    })