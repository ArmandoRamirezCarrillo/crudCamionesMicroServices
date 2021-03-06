const express = require('express');
const cors = require('cors')
// const fileUpload = require('express-fileupload'); /*Pendiente por revisar*/

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            camiones: '/api/camiones'
        }

        //Conectar a la base de datos
        this.conectarDB();

        this.middlewares();

        //Rutas
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        //Parseo y lectura del body
        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.paths.camiones, require('../routers/camiones'));
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Servidor corriendo en puerto: ${this.port}`));
    }

}

module.exports = Server;