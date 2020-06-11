var service = require('../service/service');
const {Utilizador} = require ('../models'); 

exports.registo = function(req, res) {
    const { name, email, password } = req.body;
    const utilizadores = Utilizador.create({
      name: name,
      email: email,
      password: password
    })
      .then(function (utilizadores) {
        return res.status(201).json({
          success: true,
          utilizadores: utilizadores
        });
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "Erro na execução do pedido. Os dados referentes ao utilizador não são válidos."
        });
      });
  
    res.status(201).json({
      success: true,
      utilizadores: utilizadores
    });
  };


//GET EMAIL:PASSWORD  
exports.login = function(req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    Utilizador.findOne({ where: { email }})
      .then(function (utilizador) {
        console.log(utilizador.dataValues);  
        if (!utilizador || utilizador.dataValues.password != password) {  
            return res.status(404).send({
                    message:"Nenhum utilizador com o identificador encontrado."
              });
        }
        return res
        .status(200)
        .send({token: service.createToken(utilizador.dataValues.id)});
      })
      .catch((error) => {
        res.status(404).send({
          message: error.message || "Erro na execução do pedido"
        });
      });
};

//GET RESET:PASSWORD
exports.resetpassword = function(req, res) {
  const { email, password, confirmPassword } = req.body;
  console.log(req.body);
  Utilizador.findOne({ where: { email }})
    .then(function (utilizador) {
      console.log(utilizador.dataValues);  
      if (!utilizador) {  
          return res.status(404).send({
                  message:"Nenhum utilizador com o identificador encontrado."
            });
      }
      if (confirmPassword != password) {  
        return res.status(404).send({
                message:"As passwords não coincidem!"
          });
      }
      Utilizador.update({password},{ where: { email }})
      .then(function (update) {
        console.log(update);  
        if (!update) {  
            return res.status(404).send({
                    message:"Erro no update da password!"
              });
        }
        return res
        .status(200)
        .send({success: true});
      })
      
      .catch((error) => {
        return res.status(404).send({
          message: error.message || "Erro na execução do pedido"
        });
      });
  })

  .catch((error) => {
    res.status(404).send({
      message: error.message || "Erro na execução do pedido"
    });
  });
};