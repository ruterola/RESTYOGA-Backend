'use strict';

module.exports = (sequelize, DataTypes) => {
  const Atividade = sequelize.define('Atividade', {
    userId: DataTypes.INTEGER,
    planoId: DataTypes.INTEGER,
    data_start: DataTypes.DATE,
    data_fin: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'atividades'
  });
  return Atividade;
};