const Camion = require("../models/camion");

/*Camiones*/
const existeCamionPorId = async(id = '') => {
    const existeCamion = await Camion.findById(id);
    if(!existeCamion){
        throw new Error(`El id: ${id} del camion no existe`);
    }
}

module.exports = {
    existeCamionPorId
}