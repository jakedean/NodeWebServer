var fs = require('fs'),
    moduleLoader = require('./moduleLoader.js');

var router = function (req, res) {

  moduleLoader.populateRoutingObject('controllers', function() {

    var controllerCollection = moduleLoader.get.controllerCollection,
        controllerArray = moduleLoader.get.controllerArray,
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
      controllerCollection.callThisController(req, res);

    }

  });
      
}

module.exports = function(req, res) {
  return router(req, res);
};


//This is the router
//and again
//no merge commit when I rebase.
