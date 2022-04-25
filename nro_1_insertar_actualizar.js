const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'Bren123466', {
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

//Crear
sequelize.sync()
    .then(() => Bandas.create({
        nombre: 'Callejeros',
        genero: 'Rock nacional'
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

//Actualizar registro
Bandas.update({ nombre: 'Don Osvaldo'}, {
    where: {
        nombre: 'Callejeros'
    }
}).then(() => {
    console.log('Done');
});