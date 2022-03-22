const { Console } = require('console')
const express = require('express')
// si se desea utilizar mysql desabilita esto
// const mysql = require('mysql')
// const mysqlconnet = require('express-myconnection')
const verifyToken = require('./config/tockenizer/tokenizer')
const morgan = require('morgan')
const cors = require("cors")
/// rotas de app ---------------------------------
const tokeniser = require('./config/tockenizer/router/routertoken')
const generico = require('./routes/generic')
/// ----------------------------------------------
const config = require('./config/config.json')

//config ----------------------------------------------------------------------
const app = express()
app.set('port', process.env.PORT || config.apires.portpru)

// si se desea utilizar mysql desabilita esto
//const dbopccion = config.bd.mysql[config.bd.mysql.tipeOption]

//mydellwares ------------------------------------------------------------------
// si se desea utilizar mysql desabilita esto
// app.use(mysqlconnet(mysql, dbopccion, config.bd.mysql.tipeOption))
app.use(express.json())
app.use(morgan("dev"))
app.use(cors(config.apires.control_access.host))

//rootas -----------------------------------------------------------------------
//**** roota principal o gemerica *****/
app.get('/', (req, res) => {
    res.send('welcon to my apy')
})
//**** routers personalizados */
app.use('/tokeniser',tokeniser)
app.use('/genetic',verifyToken,generico)

//resever runnig----------------------------------------------------------------
app.listen(app.get('port'),config.apires.hosturl, () => {
    console.log("servidor se encuentra corriendo por el puerto", app.get('port'))
})