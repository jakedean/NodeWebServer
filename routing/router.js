var fs = require('fs'),
    routingObject = require('./routingObjectReturner.js');

var router = function (req, res) {

  routingObject.populateRoutingObject('controllers', function() {

    var controllerCollection = routingObject.get.controllerCollection,
        controllerArray = routingObject.get.controllerArray,
        url = req.url,
        method = req.method,
        urlComponents = url.split('/'),
        possibleController = urlComponents[1],
        isController = controllerArray.indexOf(possibleController),
        pageToRender,
        callThisController;

    if (isController == -1) {

      // If we do not recognize the controller we will try to serve it as a static page
      pageToRender = urlComponents[1];
      controllerCollection.staticPagesController(req, res);

    } else {

      // Otherwise we are going to dish it out to the controller that can deal with the req
      callThisController = possibleController + 'Controller';
      controllerObject.callThisController(req, res);

    }

  });
      
}

module.exports = function(req, res) {
  return router(req, res);
};
