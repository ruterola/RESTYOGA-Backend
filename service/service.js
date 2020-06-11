var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/config');
exports.createToken = function(userId) {
    console.log(userId);
  var payload = {
    sub: userId,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};