const cloud = require("cloudinary")
const dotenv = require("dotenv")
const config = require('../../key.json');
dotenv.config()

cloud.config({
    cloud_name: config.cloudinary.CLOUND_NAME,
    api_key: config.cloudinary.API_KEY,
    api_secret: config.cloudinary.API_SECRET
});

exports.uploads = (file,folder) =>{
    return new Promise(resolve =>{
        cloud.uploader.upload(file,(result)=>{
            resolve({
                url: result.url,
                id: result.public_id
            })
        },{
            resource_type: "auto",
            folder: folder
        })
    })
}