
var fs = require('fs'),
    logger = require('../logging/logger.js'),
    blogPostsResource = require('../resources/blogPostsResource.js'),
    projectsResource = require('../resources/projectsResource'),
    staticPagesResource = require('../resources/staticPagesResource'),
    blogPostResource = require('../resources/blogPostResource.js'),
    projectResource = require('../resources/projectResource'),
    staticPageResource = require('../resources/staticPageResource'),



var actionDelegator = function(req, res) {
  
  var resourcesObject = { 'blogPosts' : blogPostsResource, 
                          'projects' : projectsResource,
                          'staticPages' : staticPagesResource,
                          'blogPost' : blogPostResource,
                          'project' projectResource,
                          'staticPage' : staticPageResource }, 
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