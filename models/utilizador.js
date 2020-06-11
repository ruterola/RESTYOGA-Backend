'use strict';

module.exports = (sequelize, DataTypes) => {
  const Utilizador = sequelize.define('Utilizador', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: true,
    tableName: 'utilizadores'
  });
   Utilizador.associate = function(models) {
    Utilizador.hasMany(models.Atividade,  {foreignKey: 'userId'});
  }; 
  return Utilizador;
};