var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    blogPostsDao = require('./blogPostsDao.js'),
    resourceUtility = require('../util/resourceUtilityFunctions');

var blogPostsResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPost' : undefined,

	'availableHttpActionsObj' : { 'get' : this.get, 'post' : this.post },

  'actionDelegator' : function (req, res) {
    var this.httpVerb = req.method,
        this.httpBody = req.body;

    if (this.httpVerb in this.availableHttpActionsObj) {
    	this.availableHttpActionsObj[this.httpVerb](req, res);
    } else {
    	resourceUtility.renderResourceNotFound(req, res);
    }

  },

  'get' : function(req, res) {
    blogPostsDao.search(data, res);
  },

  'post' : function(req, res) {
    blogPostsDao.create(data, res);
  }


}


module.exports = function(blogPostsResourceObject, req, res) {
  return blogPostsResourceObject.actionDelegator(req, res);
}