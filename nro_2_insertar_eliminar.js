const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Bandas extends Sequelize.Model {}
Bandas.init({
    nombre: Sequelize.STRING,
    genero: Sequelize.STRING
}, {sequelize, modelName: 'bandas'});
  
//INSERTAR
Bandas.create({
    nombre: 'Miranda',
    genero: 'Rock'
}).then(() => {
    console.log('Done');
});

//Eliminar
Bandas.update({ genero: 'Pop' }, {
    where: {
        nombre: 'Miranda'
    }
}).then(() => {
    console.log("Registro eliminado");
});