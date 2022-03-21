const express = require('express')
const model = require("../models/model")
const rooutes = express.Router()
const obj = new model()
//######################### rooutes ###################################
//listar
rooutes.get('/', async (req, res) => {
    obj.crear()
    const listmodel = await obj.listar()
    res.json(listmodel)
})

module.exports = rooutes