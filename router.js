var fs = require('fs'),
    staticPagesController = require('./controllers/staticPagesController.js'),
    projectsController = require('./controllers/projectsController.js'),
    blogPostsController = require('./controllers/blogPostsController.js'),
    servicesController = require('./controllers/servicesController.js');

var router = function (req, res) {
  
  var controllerObject = {
      'projects' : projectsController,
      'blogPosts' : blogPostsController,
      'staticPages' : staticPagesController,
      'services' : servicesController
    },
    controllerArray = ['projects', 'blogPosts', 'staticPages', 'services'],
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
    staticPagesController(url, res);

  } else {

    // Otherwise we are going to dish it out to the controller that can deal with the req
    callThisController = possibleController + 'Controller';
    controllerObject.callThisController(req, res);

  }
      
}


module.exports = function(req, res) {
  return router(req, res);
};
