require('../config/lib/connet_mongo')
const {Schema, model} = require('mongoose')

const Noteschema = new Schema({
    title: {
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    }
},{// decirle que cada ves que se actualize, tenga algo temporal
    timestamps: true
})

const modeelo = model('node', Noteschema)
module.exports = modeelo