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

sequelize.sync()
  .then(() => Bandas.create({
    nombre: 'Tini',
    genero: 'Pop'
  })).then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => Bandas.create({
    nombre: 'La renga',
    genero: 'Rock nacional'
  })).then(jane => {
    console.log(jane.toJSON());
  });
  
sequelize.sync()
  .then(() => Bandas.create({
    nombre: 'Conociendo rusia',
    genero: 'Rock Pop'
  })).then(jane => {
    console.log(jane.toJSON());
  });  


Bandas.destroy({
  where: {
    genero: 'Pop'
  }
}).then(() => {
  console.log("Se eliminaron los registros");
});  