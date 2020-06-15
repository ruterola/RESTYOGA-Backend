const express = require('express');
const router = express.Router();
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/planos')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

var upload = multer({ storage: storage })

//importar o controlador
const planoController = require('../controllers/planoController');

const middleware = require('../middleware/middleware');

//endpoints da API
router.get('/planos', planoController.getAllPlanos);
router.get('/plano/:id', planoController.getPlanoById);
router.post('/plano', planoController.createPlano);
router.put('/plano/:id', upload.single('plano'), planoController.updatePlanoById);
router.delete('/plano/:id', planoController.deletePlanoById);
router.get('/imagem/plano/:id', planoController.getImage); //ANDROID

///ATIVIDADE
router.post('/atividadestart', middleware.ensureAuthenticated, planoController.startSession);
router.post('/atividadefin', middleware.ensureAuthenticated, planoController.closeSession);


module.exports = router;