const express = require('express')
const rooutes = express.Router()
//######################### rooutes ###################################
//listar
rooutes.get('/', async (req, res) => {
    return res.send("Probando la ruta generica")
})

module.exports = rooutes