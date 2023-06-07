
const { Genero, Cancione } = require('../database/models');

// Controlador para obtener todos los géneros con sus canciones asociadas
exports.obtenerGeneros = async (req, res) => {
  try {
    // Consultar todos los géneros con sus canciones asociadas
    const generos = await Genero.findAll({
      include: { model: Cancione, as: 'canciones' }
    });

    res.json(generos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener los géneros' });
  }
};