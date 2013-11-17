

var fs = require('fs');

var actionDelegator = function(req, res) {
  console.log('I am in the action delegator'); 
}


module.exports = function(req, res) {
  return actionDelegator(req, res);
}
