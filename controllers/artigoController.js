const {Artigo} = require ('../models'); 
const express = require('express');
const controllers = express.Router();
const path = require('path');


// FUNÇÃO DO ENDPOINT ARTIGO
//GET ALL ARTIGOS
controllers.getAllArtigos = async (req, res) => {
    const artigos = await Artigo.findAll()
      .then(function (artigos) {
        return artigos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
      res.json({
        success: true,
        artigos: artigos,
      });
    };

//GET ARTIGO BY:ID
controllers.getArtigoById = async (req, res) => {
    const { id } = req.params;
    const artigos = await Artigo.findAll({ where: { id: id } })
      .then(function (artigos) {
        if (artigos.length === 0) {
          return 'Nenhum artigo com o identificador encontrado.';
        }
        return artigos;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Nenhum artigo com o identificador encontrado.",
        });
      });
  
    res.json({
      success: true,
      artigos: artigos,
    });
  };

//POST ARTIGO
controllers.createArtigo = async (req, res) => {
    const { nome, imagem, descricao } = req.body;
    const artigos = await Artigo.create({
      nome: nome,
      imagem: imagem,
      descricao: descricao,
    })
      .then(function (artigos) {
        return artigos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido. Os dados referentes ao artigo não são válidos.",
        });
      });
  
    res.status(201).json({
      success: true,
      artigos: artigos,
    });
  };

//DELETE ARTIGO:ID
controllers.deleteArtigoById = async (req, res) => {
    const { id } = req.params;
    const artigos = await Artigo.destroy({ where: { id: id } }).catch((error) => {
      res.status(400).send({
        message: error.message || "Erro ao remover o artigo.",
      });
    });
  
    res.status(204).json({
      success: true,
      artigos: artigos,
    });
  };

//UPDATE ARTIGO:ID
controllers.updateArtigoById = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;
  console.log(req.file);
    const artigos = await Artigo.update(
      {
        nome: nome,
        imagem: req.file.path,
        descricao: descricao,
      },
      {
        where: { id: id },
      }
    )
      .then(function (artigos) {
        return artigos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Ocorreu um erro ao tentar atualizar o artigo",
        });
      });
  
    res.json({
      success: true,
      artigos: artigos,
    });
  };

  //GET ARTIGO IMAGEM BY:ID
controllers.getImage = async (req, res) => {
  const { id } = req.params;
  const pathImage = await Artigo.findOne({ where: { id: id } })
    .then(function (artigos) {
      if (artigos.length === 0) {
        return 'Nenhum artigo com o identificador encontrado.';
      }
      console.log(artigos);
      return artigos.dataValues.imagem;
    })
    .catch((error) => {
      res.status(404).send({
        message: error.message || "Nenhum artigo com o identificador encontrado.",
      });
    });
    res.sendFile(path.join(__dirname, '../', pathImage));
};

module.exports = controllers;