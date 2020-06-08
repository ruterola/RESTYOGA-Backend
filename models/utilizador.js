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
      // associations can be defined here

    //UM UTILIZADOR PODE TER ASSOCIADO VÁRIOS PLANOS (1-n)
    Utilizador.belongsTo(models.Atividade);
  };
  return Utilizador;
};