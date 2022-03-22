// si se desea utilizar mysql desabilita esto
const mysql = require('mysql')
const mysqlconnet = require('express-myconnection')
const config = require('../config.json')
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
// configuraciones
const dbopccion = config.bd.mysql[config.bd.mysql.tipeOption]

module.exports = {
    configmysql: mysqlconnet(mysql, dbopccion, config.bd.mysql.tipeOption),
    configjson : express.json(), // para que las respuestas se den en json
    configresponse : morgan("dev"), // ayuda a ver las peticiones en log de lo que se envia al servidor
    configcors: cors(config.apires.control_access.host)
}