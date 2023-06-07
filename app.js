const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

// Configurar la conexión a la base de datos
const sequelize = new Sequelize('musicando', 'root', null,{
  host: 'localhost',
  dialect: 'mysql',
});

// Verificar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000.');
});

app.use(express.json());
