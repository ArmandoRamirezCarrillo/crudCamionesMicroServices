const { response } = require("express");

const obtenerCamiones = async (req, res = response) => {
    res.status(200).json({
        msg: 'Entro a obtener camiones'
    });
}

module.exports = {
    obtenerCamiones
}