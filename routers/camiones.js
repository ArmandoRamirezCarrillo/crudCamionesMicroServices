const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerCamiones, crearCamion, obtenerCamion } = require('../controllers/camiones');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Crea todos los camiones
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ruta', 'La ruta es obligatoria').not().isEmpty(),
    check('yearCamion', 'El año del camion es obligatorio').not().isEmpty(),
    validarCampos
],crearCamion);

//Obtiene todos los camiones
router.get('/', obtenerCamiones);

// Obtiene un camion por id
router.get('/:id',obtenerCamion)

module.exports = router;