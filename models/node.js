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
    },
    notas:{
        type:Array,
        require: false
    }
},{// decirle que cada ves que se actualize, tenga algo temporal
    timestamps: true,
    // eliminar las verciones de key
    versionkey:false
})

const modeelo = model('node', Noteschema)
module.exports = modeelo