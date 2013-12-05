var fs = require('fs');

var actionDelegator = function(req, res) {
  
},


//to get our static pages resources
var staticPagesResource = function(req, res) {
  routingObject.populateRoutingObject('staticPages', function() {

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


module.exports = function(req, res) {
  return actionDelegator(req, res);
}
