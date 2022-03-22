const express = require('express')
const rooutes = express.Router()
//######################### rooutes ###################################
//listar
rooutes.get('/', async (req, res) => {
    return res.send({"messege": "La api esta funcionando correctamente"})
})

module.exports = rooutes