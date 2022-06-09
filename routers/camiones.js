const { Router } = require('express');
const { obtenerCamiones } = require('../controllers/camiones');

const router = Router();

router.get('/', obtenerCamiones);

module.exports = router;