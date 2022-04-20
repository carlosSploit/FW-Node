// Informacion cobre la creacion del codigo -> https://www.youtube.com/watch?v=1y0-IfRW114

const {google} = require('googleapis');
const path = require('path');
const fs = require('fs');
const config = require('../../key.json');
// creacion de la ruta
// const express = require('express')
// const rooutes = express.Router()

const CLIENT_ID = config.googledrive.CLIENT_ID;
const CLIENT_SECRET = config.googledrive.CLIENT_SECRET;
const REDIRECT_URI = config.googledrive.REDIRECT_URI;
const REFRESH_TOKEN = config.googledrive.REFRESH_TOKEN;

const oauth2 = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = new google.drive({
    version : 'v3',
    auth: oauth2
})


const insertar = async (patha) =>{
    try {
        const response = await drive.files.create({
            requestBody:{
                name: patha.originalname,
                mimeType: patha.mimetype,
            },
            media:{
                mimeType: patha.mimetype,
                body : fs.createReadStream(patha.path)
            }
        });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

const delect = async (id) =>{
    try {
        const response = await drive.files.delete({
            fileId: id
        });

        console.log(response.data,response.status);
    } catch (error) {
        console.log(error.message);
    }
}

const generectUrlPublic = async (id) =>{
    try {
        await drive.permissions.create({
            fileId: id,
            requestBody:{
                role: 'reader',
                type: 'anyone'
            }
        });
        const response = await drive.files.get({
            fileId: id,
            fields: 'webViewLink, webContentLink'
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    insertar: insertar,
    delect: delect,
    generectUrlPublic: generectUrlPublic
}