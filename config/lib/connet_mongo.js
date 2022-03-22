
const mongoose = require("mongoose")
const config = require("../config.json")
const MONGODB_URI = `mongodb://${config.bd.mongo.host}/${config.bd.mongo.bd}`


mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db=> console.log("se a conectado correctamente"))
  .catch(err => console.log(err));

