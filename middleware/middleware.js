var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/config');
exports.ensureAuthenticated = function(req, res, next) {
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Não estás autorizado!"});
  }
  
  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);
  
  if(payload.exp <= moment().unix()) {
     return res
        .status(401)
        .send({message: "Ups, o token expirou!"});
  }
  
  req.user = payload.sub;
  next();
}