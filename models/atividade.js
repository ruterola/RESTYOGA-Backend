'use strict';

module.exports = (sequelize, DataTypes) => {
  const Atividade = sequelize.define('Atividade', {
    userId: DataTypes.INTEGER,
    planoId: DataTypes.INTEGER,
    data_start: DataTypes.DATE,
    data_fin: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'atividades'
  });
  Atividade.associate = function (models) {
    Atividade.belongsTo(models.Utilizador, { foreignKey: 'userId' });
    Atividade.belongsTo(models.Plano, { foreignKey: 'planoId' });
  };
  return Atividade;
};