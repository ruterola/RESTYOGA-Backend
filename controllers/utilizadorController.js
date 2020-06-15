const express = require('express');
const controllers = express.Router();
const {Utilizador, Atividade, Plano} = require ('../models'); 


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
      
      res.json({
        success: true,
        utilizadores: utilizadores,
      });
    };

//GET UTILIZADOR BY:ID
controllers.getUserById = async (req, res) => {
  const { id } = req.params;
  const utilizadores = await Utilizador.findOne({ where: { id: id } })
    .then(function (utilizadores) {

      if (utilizadores.length === 0) {
        return 'Nenhum utilizador com o identificador encontrado.';
      }
      return utilizadores;
    })
    .catch((error) => {
      res.status(404).send({
        message: error.message || "Erro na execução do pedido",
      });
    });
    const atividades = await Atividade.findAll({ where: { userId: id }, include: [Plano] })
    .then(function (atividades) {

      if (atividades.length === 0) {
        return 'Nenhuma atividade com o utilizador identificado.';
      }
      return atividades;
    })
    .catch((error) => {
      res.status(404).send({
        message: error.message || "Erro na execução do pedido",
      });
    });

  res.json({
    success: true,
    utilizadores: {utilizadores, atividades}
  });
};

//POST UTILIZADOR
///AUTH

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

module.exports = controllers;