const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

// Ruta para obtener todas las canciones con sus propiedades
router.get('/', cancionesController.obtenerCanciones);

// Ruta para crear una nueva canción
router.post('/', cancionesController.crearCancion);

// Ruta para obtener una canción por su ID
router.get('/:id', cancionesController.obtenerCancionPorId);

module.exports = router;