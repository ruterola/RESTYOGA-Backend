const express = require('express');
const router = express.Router();

//importar o controlador
const planoController = require('../controllers/planoController');

const middleware = require('../middleware/middleware');

//endpoints da API
router.get('/planos', planoController.getAllPlanos);
router.get('/plano/:id', planoController.getPlanoById);
router.post('/plano', planoController.createPlano);
router.put('/plano/:id', planoController.updatePlanoById);
router.delete('/plano/:id', planoController.deletePlanoById);

///ATIVIDADE
router.post('/atividadestart', middleware.ensureAuthenticated, planoController.startSession);
router.post('/atividadefin', middleware.ensureAuthenticated, planoController.closeSession);


module.exports = router;