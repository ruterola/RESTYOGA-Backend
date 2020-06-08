const express = require('express');
const controllers = express.Router();
const db = require ('../models'); 


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
    const planos = await Plano.findAll({ where: { id: id } })
      .then(function (planos) {
        return planos;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Nenhum plano com o identificador encontrado.",
        });
      });
  
    res.json({
      success: true,
      exercicios: exercicios,
    });
  };

//POST PLANO
controllers.createPlano = async (req, res) => {
    const { nome, imagem, descricao } = req.body;
    const planos = await Plano.create({
      nome: nome,
      imagem: imagem,
      descricao: descricao,
    })
      .then(function (planos) {
        console.log(planos);
        return planos;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido. Os dados referentes ao exercicio não são válidos.",
        });
      });
  
    res.status(201).json({
      success: true,
      planos: planos,
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
    const { nome, imagem, descricao } = req.body;
    const planos = await Plano.update(
      {
        nome: nome,
        imagem: imagem,
        descricao: descricao,
      },
      {
        where: { id: id },
      }
    )
      .then(function (planos) {
        console.log(planos);
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

///////////////////////////////
/////////////////////ATIVIDADE

//POST/PLANO/INICIAR ATIVIDADE
controllers.startSession = async (req, res) => {
    const { idUser, idPlano } = req.body;
    const planos = await Plano.create({
      idUser:idUser,
      idPlano: idPlano,
      data_start: data_start,
      data_fin:data_fin,
    })
      .then(function (planos) {
        console.log(planos);
        return planos;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
  
    res.status(201).json({
      success: true,
      planos: planos,
    });
  };

//POST/PLANO/TERMINAR ATIVIDADE
controllers.closeSession = async (req, res) => {
    const { idUser, idPlano } = req.body;
    const planos = await Plano.create({
      idUser:idUser,
      idPlano: idPlano,
      data_start: data_start,
      data_fin:data_fin,
    })
      .then(function (planos) {
        console.log(planos);
        return planos;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
  
    res.status(201).json({
      success: true,
      planos: planos,
    });
  };
  
  //GETID?! DA ATIVIDADE 

module.exports = controllers;