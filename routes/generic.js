const express = require('express')
const rooutes = express.Router()
const connet = require('../config/lib/connet_mysql')
const objconnet = new connet()
//######################### rooutes ###################################
//listar
rooutes.get('/', async (req, res) => {
    return res.send("Probando la ruta generica")
})

module.exports = rooutes