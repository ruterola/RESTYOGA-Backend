const express = require('express');
const router = express.Router();

//importar o controlador
const utilizadorController = require('../controllers/utilizadorController');

//endpoints da API
router.get('/utilizadores', utilizadorController.getAllUsers);
router.get('/utilizador/:id', utilizadorController.getUserById);
router.put('/utilizador/:id', utilizadorController.updateUserById);
router.delete('/utilizador/:id', utilizadorController.deleteUserById);


module.exports = router;