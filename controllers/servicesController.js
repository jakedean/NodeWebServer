
var fs = require('fs'),
    logger = require('../logging/logger.js'),
    routingObject = require('../routingObjectReturner.js');



var actionDelegator = function(req, res) {
  
  var resourcesObject = routingObject.resources, 
    potentialResource = url.split('/')[2],
    callThisResource;

  if (potentialResource in resourcesObject) {
    resourcesObject[potentialResource](req, res);
  } else {
    serve('serviceNotFound.html', res);
  }
  
}

var serve = function(page, res) {

  fs.readFile('/Users/Jake/Documents/node/webServer/views/staticPages/' + page, function(err, data) {
    if (err) {
      logger(__filename, err);
    } else {
      res.write(data);
      res.end();
    }
  });
}

module.exports = function(url, res) {
  return actionDelegator(url, res);
}