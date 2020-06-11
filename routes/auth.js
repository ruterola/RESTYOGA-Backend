const express = require('express');
const router = express.Router();

//importar o controlador
const authController = require('../controllers/authController');

//endpoints da API
router.post('/auth/registo', authController.registo);
router.post('/auth/login', authController.login);
router.post('/auth/resetpassword', authController.resetpassword);


module.exports = router;