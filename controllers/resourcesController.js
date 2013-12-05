
var fs = require('fs'),
    logger = require('../logging/logger.js'),
    routingObject = require('../routing/routingObjectReturner.js');

var actionDelegator = function(req, res) {
  routingObject.populateRoutingObject('resources', function() {

    var resourceCollection = resourcesObject.get.resourceCollection, 
        potentialResource = url.split('/')[2],
        callThisResource;

    if (potentialResource in resourceCollection) {
      resourceCollection.potentialResource(req, res);
    } else {
      serve('serviceNotFound.html', res);
    }

  });
      
}

var serve = function(page, res) {

  fs.readFile('./views/staticPages/' + page, function(err, data) {
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