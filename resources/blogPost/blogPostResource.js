var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    blogPostDao = require('./blogPostsDao.js'),
    resourceUtility = require('../util/resourceUtilityFunctions');

var blogPostsResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPost' : undefined,

	'availableHttpActionsObj' : {'get' : this.get, 'put' : this.put },

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
    blogPostDao.search(targetPost, req, res);
  },

  'put' : function(req, res) {
    blogPostDao.update(targetPost, req, res);
  }

  'delete' : function(req, res) {
    blogPostDao.delete(targetPost, req, res);
  }


}


module.exports = function(blogPostsResourceObject, req, res) {
  return blogPostsResourceObject.actionDelegator(req, res);
}