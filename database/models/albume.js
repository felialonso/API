module.exports = (sequelize, DataTypes) => {
    const Albume = sequelize.define(
      'Albume',
      {
        nombre: DataTypes.STRING,
        duracion: DataTypes.INTEGER,
      },
      {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
  
    Albume.associate = (models) => {
      Albume.hasMany(models.Cancione, {
        as: 'canciones',
        foreignKey: 'album_id',
      });
    };
  
    return Albume;
  };