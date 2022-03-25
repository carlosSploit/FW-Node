const express = require('express')
// si se desea utilizar mysql desabilita esto
const verifyToken = require('./config/tockenizer/tokenizer')
/// rotas de app ---------------------------------
const tokeniser = require('./config/tockenizer/router/routertoken')
const generico = require('./routes/generic')
/// ----------------------------------------------
const config = require('./config/config.json')
const middelware = require('./config/myddelwares')

//config ----------------------------------------------------------------------
const app = express()
app.set('port', process.env.PORT || config.apires.portpru)

//mydellwares ------------------------------------------------------------------
/* 
si se desea utilizar mysql descomente la linea
app.use(middelware.configmysql)
por otro lado entre a la carpeta config/lib/myddelware.js y rescomente la linea
configmysql: mysqlconnet(mysql, dbopccion, config.bd.mysql.tipeOption),
*/
//app.use(middelware.configmysql)
app.use(middelware.configjson)
app.use(middelware.configresponse)
app.use(middelware.configcorsdev)
//rootas -----------------------------------------------------------------------
//**** roota principal o gemerica *****/
app.get('/', (req, res) => {
    res.send('welcon to my apy')
})
//**** routers personalizados */
app.use('/tokeniser',tokeniser)
app.use('/genetic',generico)
//,verifyToken,

//resever runnig----------------------------------------------------------------
app.listen(app.get('port'),config.apires.hosturl, () => {
    console.log("servidor se encuentra corriendo por el puerto", app.get('port'))
})