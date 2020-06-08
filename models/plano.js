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
    // associations can be defined here
    
    //UM PLANO PODE SER FEITO POR VÁRIOS UTILIZADORES (n-n)
    //plano.hasMany(models.users);
    
    //UM PLANO PODE TER VÁRIOS EXERCICIOS ASSOCIADOS (1-n)
    Plano.hasMany(models.Exercicio);
  };
  return Plano;
};