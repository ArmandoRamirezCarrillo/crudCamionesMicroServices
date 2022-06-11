const { response } = require("express");
const Camion = require("../models/camion");

const crearCamion = async (req, res = response) => {
    
    //Obteniendo la informacion
    const {nombre, ...body} = req.body;

    //Validando si existe el camion
    const camionDB = await Camion.findOne({nombre});

    if(camionDB){
        return res.status(400).json({
            msg: `El Camion ${camionDB.nombre} ya esta registrado`
        })
    }

    //Se genera la data para guardar
    const dataCamion = {nombre,...body}

    //Prepara la data para guardar
    const camion = new Camion(dataCamion);

    await camion.save();

    res.status(200).json({
        data: camion,
        msg: "Se guardo correctamente"
    });
}

const obtenerCamiones = async (req, res = response) => {
    
    //Obtiene todos los camiones
    const camiones = await Camion.find();

    res.status(200).json({
        data: camiones,
        msg: 'Obtuvo todos los camiones'
    });
}

const obtenerCamion = async (req, res = response) => {
 
    const { id } = req.params;

    const camion = await Camion.findById(id).populate('nombre');

    res.status(200).json({
        data: camion,
        msg: 'Obteniendo un camion'
    });
}

module.exports = {
    obtenerCamiones,
    crearCamion,
    obtenerCamion
}