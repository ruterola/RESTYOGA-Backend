'use strict';

module.exports = (sequelize, DataTypes) => {
  const Plano = sequelize.define('Plano', {
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    timestamps: true,
    tableName: 'planos'
  });
  Plano.associate = function(models) {
    Plano.hasMany(models.Exercicio);
    Plano.hasMany(models.Atividade,  {foreignKey: 'planoId'});
  };
  return Plano;
};