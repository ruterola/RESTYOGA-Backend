'use strict';

module.exports = (sequelize, DataTypes) => {
  const Artigo = sequelize.define('Artigo', {
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'artigos'
  });
  return Artigo;
};