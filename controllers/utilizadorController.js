const express = require('express');
const controllers = express.Router();
const db = require ('../models');


// FUNÇÃO DO ENDPOINT UTILIZADOR
//GET ALL UTILIZADORES
controllers.getAllUsers = async (req, res) => {
    const utilizadores = await Utilizador.findAll()
      .then(function (utilizadores) {
        return utilizadores;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido.",
        });
      });
      
      console.log(utilizadores);
      res.json({
        success: true,
        utilizadores: utilizadores,
      });
    };

//GET UTILIZADOR BY:ID
controllers.getUserById = async (req, res) => {
    const { id } = req.params;
    const utilizadores = await Utilizador.findAll({ where: { id: id } })
      .then(function (utilizadores) {
        return utilizadores;
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Nenhum utilizador com o identificador encontrado.",
        });
      });
  
    res.json({
      success: true,
      utilizadores: utilizadores,
    });
  };

//POST UTILIZADOR
controllers.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const utilizadores = await Utilizador.create({
      name: name,
      email: email,
      password: password,
    })
      .then(function (utilizadores) {
        console.log(utilizadores);
        return utilizadores;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido. Os dados referentes ao utilizador não são válidos.",
        });
      });
  
    res.status(201).json({
      success: true,
      utilizadores: utilizadores,
    });
  };

//DELETE UTILIZADOR:ID
controllers.deleteUserById = async (req, res) => {
    const { id } = req.params;
    const utilizadores = await Utilizador.destroy({ where: { id: id } }).catch((error) => {
      res.status(400).send({
        message: error.message || "Erro ao remover o utilizador.",
      });
    });
  
    res.status(204).json({
      success: true,
      utilizadores: utilizadores,
    });
  };

//UPDATE UTILIZADOR:ID
controllers.updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const utilizadores = await Utilizador.update(
      {
        name: name,
        email: email,
        password: password,
      },
      {
        where: { id: id },
      }
    )
      .then(function (utilizadores) {
        console.log(utilizadores);
        return utilizadores;
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Ocorreu um erro ao tentar atualizar as informações do utilizador",
        });
      });
  
    res.json({
      success: true,
      utilizadores: utilizadores,
    });
  };

  /////////////////PASS SEGURA
  //LOGIN + LOGOUT 
  //RESET

module.exports = controllers;