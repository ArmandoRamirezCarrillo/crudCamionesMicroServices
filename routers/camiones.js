const { Router } = require('express');
const { obtenerCamiones, crearCamion } = require('../controllers/camiones');

const router = Router();

//Crea todos los camiones
router.post('/', crearCamion);

//Obtiene todos los camiones
router.get('/', obtenerCamiones);

module.exports = router;