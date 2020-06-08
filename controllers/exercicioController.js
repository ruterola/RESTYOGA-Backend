const express = require('express');
const controllers = express.Router();
const db = require ('../models'); 


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
      
      console.log(exercicios);
      res.json({
        success: true,
        exercicios: exercicios,
      });
    };

//GET EXERCICIO BY:ID
controllers.getExercicoById = async (req, res) => {
    const { id } = req.params;
    const artigos = await Exercicio.findAll({ where: { id: id } })
      .then(function (exercicios) {
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
    const { nome, imagem, descricao } = req.body;
    const exercicios = await Exercicio.create({
      nome: nome,
      imagem: imagem,
      descricao: descricao,
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
    const { nome, imagem, descricao } = req.body;
    const exercicios = await Exercicio.update(
      {
        nome: nome,
        imagem: imagem,
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

module.exports = controllers;