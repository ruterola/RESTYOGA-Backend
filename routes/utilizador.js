const express = require('express');
const router = express.Router();

//importar o controlador
const utilizadorController = require('../controllers/utilizadorController');

//endpoints da API
router.get('/utilizadores', utilizadorController.getAllUsers);
router.get('/utilizador/:id', utilizadorController.getUserById);
router.post('/utilizador', utilizadorController.createUser);
router.put('/utilizador/:id', utilizadorController.updateUserById);
router.delete('/utilizador/:id', utilizadorController.deleteUserById);

///ATIVIDADE

module.exports = router;