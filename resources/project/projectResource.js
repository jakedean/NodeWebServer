var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    projectDao = require('./projectDao.js'),
    resourceUtility = require('../util/resourceUtilityFunctions');

var blogPostsResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPost' : undefined,

	'availableHttpActionsObj' : { 'get' : this.get, 'put' : this.put, 'delete' : this.delete },

  'actionDelegator' : function (req, res) {
    var this.httpVerb = req.method,
        this.httpBody = req.body,
        this.targetPost = req.url.split('/services/blogPost/')[1];

    if (this.httpVerb in this.availableHttpActionsObj && IsNumeric(this.targetPost)) {
    	this.availableHttpActionsObj[this.httpVerb](req, res);
    } else {
    	resourceUtility.renderResourceNotFound(req, res);
    }

  },

  'get' : function(req, res) {
    projectDao.search(targetPost, req, res);
  },

  'put' : function(req, res) {
    projectDao.update(targetPost, req, res);
  }

  'delete' : function(req, res) {
    projectDao.delete(targetPost, req, res);
  }


}


module.exports = function(projectObject, req, res) {
  return projectObject.actionDelegator(req, res);
}