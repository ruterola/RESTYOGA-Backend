const express = require('express');
const router = express.Router();

//importar o controlador
const exercicioController = require('../controllers/exercicioController');

//endpoints da API
router.get('/exercicios', exercicioController.getAllExercicios);
router.get('/exercicio/:id', exercicioController.getExercicoById);
router.post('/exercicio', exercicioController.createExercicio);
router.put('/exercicio/:id', exercicioController.updateExercicioById);
router.delete('/exercicio/:id', exercicioController.deleteExercicioById);

module.exports = router;