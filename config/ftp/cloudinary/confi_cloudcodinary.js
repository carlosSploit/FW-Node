const cloud = require("cloudinary")
const dotenv = require("dotenv")

dotenv.config()



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