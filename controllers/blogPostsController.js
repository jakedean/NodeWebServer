

var fs = require('fs');

var actionDelegator = function(req, res) {
  console.log('I am in the action delegator of the blog post controller'); 
}


module.exports = function(req, res) {
  return actionDelegator(req, res);
}
