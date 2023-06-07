module.exports = (sequelize, DataTypes) => {
    const Cancione = sequelize.define(
      'Cancione',
      {
        titulo: DataTypes.STRING,
        duracion: DataTypes.INTEGER,
      },
      {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
  
    Cancione.associate = (models) => {
      Cancione.belongsTo(models.Genero, {
        as: 'genero',
        foreignKey: 'genero_id',
      });
  
      Cancione.belongsTo(models.Albume, {
        as: 'album',
        foreignKey: 'album_id',
      });
  
      Cancione.belongsTo(models.Artista, {
        as: 'artista',
        foreignKey: 'artista_id',
      });
    };
  
    return Cancione;
  };