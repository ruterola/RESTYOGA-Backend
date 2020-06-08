const express = require('express');
const router = express.Router();

//importar o controlador
const artigoController = require('../controllers/artigoController');

//endpoints da API
router.get('/artigos', artigoController.getAllArtigos);
router.get('/artigo/:id', artigoController.getArtigoById);
router.post('/artigo', artigoController.createArtigo);
router.put('/artigo/:id', artigoController.updateArtigoById);
router.delete('/artigo/:id', artigoController.deleteArtigoById);

module.exports = router;