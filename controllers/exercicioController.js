const express = require('express');
const controllers = express.Router();
const {Exercicio} = require ('../models'); 
const {Plano} = require ('../models'); 
const path = require('path');


// FUNÇÃO DO ENDPOINT EXERCICIO
//GET ALL EXERCICIOS
controllers.getAllExercicios = async (req, res) => {
    const exercicios = await Exercicio.findAll()
      .then(function (exercicios) {
        return exercicios;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
      res.json({
        success: true,
        exercicios: exercicios,
      });
    };

//GET EXERCICIO BY:ID
controllers.getExercicoById = async (req, res) => {
    const { id } = req.params;
    const exercicios = await Exercicio.findAll({ where: { id: id }, include: [Plano] })
      .then(function (exercicios) {
        if (exercicios.length === 0) {
          return 'Nenhum exercicio com o identificador encontrado.';
        }
        return exercicios;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Nenhum exercicio com o identificador encontrado.",
        });
      });
  
    res.json({
      success: true,
      exercicios: exercicios,
    });
  };

//POST EXERCICIO
controllers.createExercicio = async (req, res) => {
    const { nome, imagem, descricao, planoId } = req.body;
    const exercicios = await Exercicio.create({
      nome: nome,
      imagem: imagem,
      descricao: descricao,
      planoId: planoId
    })
      .then(function (exercicios) {
        console.log(exercicios);
        return exercicios;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido. Os dados referentes ao exercicio não são válidos.",
        });
      });
  
    res.status(201).json({
      success: true,
      exercicios: exercicios,
    });
  };

//DELETE ARTIGO:ID
controllers.deleteExercicioById = async (req, res) => {
    const { id } = req.params;
    const exercicios = await Exercicio.destroy({ where: { id: id } }).catch((error) => {
      res.status(400).send({
        message: error.message || "Erro ao remover o exercicio.",
      });
    });
  
    res.status(204).json({
      success: true,
      exercicios: exercicios,
    });
  };

//UPDATE ARTIGO:ID
controllers.updateExercicioById = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    console.log(req.file);
    const exercicios = await Exercicio.update(
      {
        nome: nome,
        imagem: req.file.path,
        descricao: descricao,
      },
      {
        where: { id: id },
      }
    )
      .then(function (exercicios) {
        console.log(exercicios);
        return exercicios;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Ocorreu um erro ao tentar atualizar o exercicio.",
        });
      });
  
    res.json({
      success: true,
      exercicios: exercicios,
    });
  };

  //GET EXERCICO IMAGEM BY:ID

  controllers.getImage = async (req, res) => {
    const { id } = req.params;
    const pathImage = await Exercicio.findOne({ where: { id: id } })
      .then(function (exercicios) {
        if (exercicios.length === 0) {
          return 'Nenhum exercicio com o identificador encontrado.';
        }
        console.log(exercicios);
        return exercicios.dataValues.imagem;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Nenhum exercicio com o identificador encontrado.",
        });
      });
      res.sendFile(path.join(__dirname, '../', pathImage));
  };

module.exports = controllers;