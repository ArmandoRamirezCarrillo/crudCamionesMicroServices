const { Schema, model } = require('mongoose');

const CamionSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del camion es obligatorio"],
        unique: true
    },
    ruta: {
        type: String,
        default: 0
    },
    yearCamion: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

CamionSchema.methods.toJSON = function(){
    const{__v, status, _id, ...data} = this.toObject();
    return data;
}

module.exports = model('Camion', CamionSchema);