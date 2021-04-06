let mongoose = require('mongoose')
const kingdomModel = require("../../models/Kingdom");
let kingdomJson = require('../data/kingdomRaw.json')
const monarchModel = require('../../models/Monarch.js');
let monarchJson = require('../data/monarchRaw.json')
// require('../connection.js')

monarchModel.find({})
    .then(monarchs => {
        monarchs.forEach(monarch => {
            kingdomModel.findOne({
                title: monarch.kingdom
            })
            .then(kingdom => {
                monarch.kingdom = kingdom
                monarch.save()
            })

        })
        
    })
   