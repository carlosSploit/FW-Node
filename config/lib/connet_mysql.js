// conection de mysql
const config = require('../config.json')
module.exports = class dbconeccion{
    
    async connection(req,res){
        let connt = null;
        connt = await new Promise((resol, reject) => req.getConnection((err, conn) => {
            if (err) return reject(err)
            resol(conn)
        }))
        return connt
    }
}