const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosController');

// Ruta para obtener todos los géneros con sus canciones asociadas
router.get('/', generosController.obtenerGeneros);

module.exports = router;