const res = require('express/lib/response')
const modeelo = require('./node')

module.exports = class bdmodel{
    
    listar = async() => {
        const persona = await modeelo.find()
        return persona
    }

    crear = async() => {
        const persona = new modeelo(
            {
                title: "comeme la pila",
                description: "agustisimo que me la como" 
            }
        )
        
        const result = await persona.save()
        return result
    }

    actualizar = async(id) => {
        const result = await persona.updateOne({_id: id},{
            $set:{
                title: "comeme la pila",
                description: "agustisimo que me la como"
            }
        })
        return result
    }

    eliminar = async(id) => {
        const result = await persona.deleteOne({_id: id})
        return result
    }

}