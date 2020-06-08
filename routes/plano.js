const express = require('express');
const router = express.Router();

//importar o controlador
const planoController = require('../controllers/planoController');

//endpoints da API
router.get('/planos', planoController.getAllPlanos);
router.get('/plano/:id', planoController.getPlanoById);
router.post('/plano', planoController.createPlano);
router.put('/plano/:id', planoController.updatePlanoById);
router.delete('/plano/:id', planoController.deletePlanoById);

///ATIVIDADE
router.post('/atividade', planoController.startSession);
router.post('/atividade', planoController.closeSession);


module.exports = router;