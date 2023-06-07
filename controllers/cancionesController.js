// Importar los modelos necesarios
const { Cancione, Albume, Genero, Artista } = require('../database/models');

// Controlador para obtener todas las canciones con sus propiedades
exports.obtenerCanciones = async (req, res) => {
  try {
    // Consultar todas las canciones con sus propiedades relacionadas
    const canciones = await Cancione.findAll({
      include: [
        { model: Albume, as: 'album' },
        { model: Genero, as: 'genero' },
        { model: Artista, as: 'artistas' }
      ]
    });

    res.json(canciones);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener las canciones' });
  }
};

// Controlador para crear una nueva canción
exports.crearCancion = async (req, res) => {
  const { titulo, duracion, generoId, albumId, artistaId } = req.body;

  try {
    // Crear la nueva canción en la base de datos
    const nuevaCancion = await Cancione.create({
      titulo,
      duracion,
      generoId,
      albumId,
      artistaId
    });

    res.json(nuevaCancion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al crear la canción' });
  }
};

// Controlador para obtener una canción por su ID
exports.obtenerCancionPorId = async (req, res) => {
  const { id } = req.params;

  try {
    // Consultar la canción por su ID con sus propiedades relacionadas
    const cancion = await Cancione.findByPk(id, {
      include: [
        { model: Albume, as: 'album' },
        { model: Genero, as: 'genero' },
        { model: Artista, as: 'artistas' }
      ]
    });

    if (!cancion) {
      return res.status(404).json({ mensaje: 'La canción no existe' });
    }

    res.json(cancion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener la canción' });
  }
};