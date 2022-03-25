// si se desea utilizar mysql desabilita esto
const mysql = require('mysql')
const mysqlconnet = require('express-myconnection')
const config = require('./config.json')
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
// configuraciones
const dbopccion = config.bd.mysql[config.bd.mysql.tipeOption]

const cors_product = (req , callback)=>{
    let whitelist = config.apires.control_access.origin
    let methodssuport = config.apires.control_access.methods
    // comprueba si el dominio es compatible
    let corsOptions = (whitelist.indexOf(req.header('Origin')) !== -1)? { origin: true } : { origin: false }
    // comprueba si el methodo esta permitido
    let corsOptions2 = (methodssuport.indexOf(req.method) !== -1)? { origin: true } : { origin: false }
    console.log(req.header('Origin'))
    callback(null, {origin: (corsOptions.origin && corsOptions2.origin)})
};

const cors_dev = (req , callback)=>{
    let corsOptions = { origin: true };
    console.log(req.header('Origin'))
    callback(null, corsOptions)
};


module.exports = {
    //configmysql: mysqlconnet(mysql, dbopccion, config.bd.mysql.tipeOption),
    configjson : express.json(), // para que las respuestas se den en json
    configresponse : morgan("dev"), // ayuda a ver las peticiones en log de lo que se envia al servidor
    configcorsdev: cors(cors_dev),
    configcorsprov :  cors(cors_product)
}