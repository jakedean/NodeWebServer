var fs = require('fs'),
    staticPagesController = require('./controllers/staticPagesController.js'),
    projectsController = require('./controllers/projectsController.js'),
    blogPostsController = require('./controllers/blogPostsController.js'),
    controllerCollection = require('./controllers/controllerCollection.js');

var router = function (req, res) {

  var url = req.url,
      method = req.method,
      urlComponents = url.split('/'),
      controllerIndex = controllerCollection.indexOf(urlComponents[1]);

  if (controllerIndex == -1) {
    // If we do not recognize the controller we will try to serve it as a static page
    var pageToRender = urlComponents[1];
    staticPagesController(url, res);
  } else {
    // Otherwise we are going to dish it out to the controller that can deal with the req
    var controller = controllerCollection[controllerIndex] + 'Controller';
    controller.apply(this, [method, uri, res]);
  }

}


module.exports = function(req, res) {
  return router(req, res);
};
