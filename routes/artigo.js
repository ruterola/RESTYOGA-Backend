const express = require('express');
const router = express.Router();
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/artigos')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

var upload = multer({ storage: storage })

//importar o controlador
const artigoController = require('../controllers/artigoController');

//endpoints da API
router.get('/artigos', artigoController.getAllArtigos);
router.get('/artigo/:id', artigoController.getArtigoById);
router.post('/artigo', artigoController.createArtigo);
router.put('/artigo/:id', upload.single('artigo'), artigoController.updateArtigoById); //INSERIR
router.delete('/artigo/:id', artigoController.deleteArtigoById);
router.get('/imagem/artigo/:id', artigoController.getImage); //ANDROID

module.exports = router;