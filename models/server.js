const express = require('express');
const cors = require('cors')
// const fileUpload = require('express-fileupload'); /*Pendiente por revisar*/

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            // auth: '/api/auth'
        }

        //Conectar a la base de datos
        this.conectarDB();
    }

    async conectarDB() {
        await dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Servidor corriendo en puerto: ${this.port}`));
    }

}

module.exports = Server;