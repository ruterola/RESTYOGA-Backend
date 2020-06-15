'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exercicio = sequelize.define('Exercicio', {
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING,  
    planoId: DataTypes.INTEGER
  }, {
    timestamps: true,
    tableName: 'exercicios'
  });
  Exercicio.associate = function(models) {
    Exercicio.belongsTo(models.Plano, {foreignKey: 'planoId'});
  };
  return Exercicio;
};