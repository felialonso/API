module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define(
      'Genero',
      {
        name: DataTypes.STRING,
      },
      {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    );
  
    Genero.associate = (models) => {
      Genero.hasMany(models.Cancione, {
        as: 'canciones',
        foreignKey: 'genero_id',
      });
    };
  
    return Genero;
  };