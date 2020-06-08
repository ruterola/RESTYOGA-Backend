const express = require('express');
const controllers = express.Router();


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
      
      console.log(artigos);
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
        console.log(artigos);
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
    const { nome, imagem, descricao } = req.body;
    const artigos = await Artigo.update(
      {
        nome: nome,
        imagem: imagem,
        descricao: descricao,
      },
      {
        where: { id: id },
      }
    )
      .then(function (artigos) {
        console.log(artigos);
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

module.exports = controllers;