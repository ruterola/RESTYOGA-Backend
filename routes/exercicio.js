const express = require('express');
const router = express.Router();
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/exercicios')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

var upload = multer({ storage: storage })

//importar o controlador
const exercicioController = require('../controllers/exercicioController');

//endpoints da API
router.get('/exercicios', exercicioController.getAllExercicios);
router.get('/exercicio/:id', exercicioController.getExercicoById);
router.post('/exercicio', exercicioController.createExercicio);
router.put('/exercicio/:id', upload.single('exercicio'), exercicioController.updateExercicioById);
router.delete('/exercicio/:id', exercicioController.deleteExercicioById);
router.get('/imagem/exercicio/:id', exercicioController.getImage); //ANDROID

module.exports = router;