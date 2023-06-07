module.exports = (sequelize, DataTypes) => {
    const Artista = sequelize.define(
      'Artista',
      {
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
      },
      {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
  
    Artista.associate = (models) => {
      Artista.hasMany(models.Cancione, {
        as: 'canciones',
        foreignKey: 'artista_id',
      });
    };
  
    return Artista;
  };