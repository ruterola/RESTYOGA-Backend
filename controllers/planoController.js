const express = require('express');
const controllers = express.Router();
const {Plano} = require ('../models'); 
const {Exercicio} = require ('../models');
const {Atividade} = require ('../models');
const path = require('path');


// FUNÇÃO DO ENDPOINT PLANOS
//GET ALL PLANOS
controllers.getAllPlanos = async (req, res) => {
    const planos = await Plano.findAll()
      .then(function (planos) {
        return planos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
      
      console.log(planos);
      res.json({
        success: true,
        planos: planos,
      });
    };

//GET PLANO:ID
controllers.getPlanoById = async (req, res) => {
    const { id } = req.params;
    const planos = await Plano.findAll({ where: { id: id }, include: [Exercicio] })
      .then(function (planos) {
        if (planos.length === 0) {
          return 'Nenhum utilizador com o identificador encontrado.';
        }
        return planos;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Nenhum plano com o identificador encontrado.",
        });
      });
  
    res.json({
      success: true,
      planos: planos,
    });
  };

//POST PLANO
controllers.createPlano = async (req, res) => {
    const { nome, imagem, descricao } = req.body;
    const planos = await Plano.create({
      nome: nome,
      imagem: imagem,
      descricao: descricao
    })
      .then(function (planos) {
        return planos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido. Os dados referentes ao exercicio não são válidos.",
        });
      });
  
    res.status(201).json({
      success: true,
      planos: planos
    });
  };

//DELETE PLANO:ID
controllers.deletePlanoById = async (req, res) => {
    const { id } = req.params;
    const planos = await Plano.destroy({ where: { id: id } }).catch((error) => {
      res.status(400).send({
        message: error.message || "Erro ao remover o plano.",
      });
    });
  
    res.status(204).json({
      success: true,
      planos: planos,
    });
  };

//UPDATE PLANO:ID
controllers.updatePlanoById = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    const planos = await Plano.update(
      {
        nome: nome,
        imagem: req.file.path,
        descricao: descricao,
      },
      {
        where: { id: id },
      }
    )
      .then(function (planos) {
        return planos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Ocorreu um erro ao tentar atualizar o plano.",
        });
      });
  
    res.json({
      success: true,
      planos: planos,
    });
  };

    //GET PLANO IMAGEM BY:ID

    controllers.getImage = async (req, res) => {
      const { id } = req.params;
      const pathImage = await Plano.findOne({ where: { id: id } })
        .then(function (planos) {
          if (planos.length === 0) {
            return 'Nenhum exercicio com o identificador encontrado.';
          }
          console.log(planos);
          return planos.dataValues.imagem;
        })
        .catch((error) => {
          res.status(404).send({
            message: error.message || "Nenhum plano com o identificador encontrado.",
          });
        });
        res.sendFile(path.join(__dirname, '../', pathImage));
    };
  

///////////////////////////////
/////////////////////ATIVIDADE

//POST/PLANO/INICIAR ATIVIDADE
controllers.startSession = async (req, res) => {

    const { planoId } = req.body;
      console.log (new Date());
    await Atividade.create({
        data_start:new Date(),
        userId:req.user,
        planoId
    })
      .then(function() {
        res.status(200).json({
          success: true || "Plano registado com sucesso! COMEÇADO",
        });
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
  };

//POST/PLANO/TERMINAR ATIVIDADE
controllers.closeSession = async (req, res) => {

  const { planoId } = req.body;
    console.log (new Date());
  await Atividade.update({
      data_fin:new Date()
  },{ where: {
    userId:req.user,
    planoId
  }})
    .then(function() {
      res.status(200).json({
        success: true || "Plano registado com sucesso! TERMINADO"
      });
    })
    .catch((error) => {
      res.status(404).send({
        message: error.message || "Erro na execução do pedido.",
      });
    });
};

module.exports = controllers;