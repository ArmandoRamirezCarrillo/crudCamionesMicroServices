const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerCamiones, crearCamion, obtenerCamion, actualizaCamion, borrarCamion } = require('../controllers/camiones');
const { existeCamionPorId } = require('../helpers/db-validators');
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
router.get('/:id', [
    check('id', 'No es un Id de mongo valido').isMongoId(),
    validarCampos,
    check('id').custom(existeCamionPorId)
],obtenerCamion)

//Actualizar camion
router.put('/:id', [
    check('id').custom(existeCamionPorId)
], actualizaCamion)

//Borrar camion

router.delete('/:id', [
    check('id', 'No es un Id de mongo valido').isMongoId(),
    check('id').custom(existeCamionPorId),
    validarCampos
],borrarCamion)

module.exports = router;