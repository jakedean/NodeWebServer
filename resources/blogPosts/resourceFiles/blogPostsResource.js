var fs = require('fs'),
    logger = require('../../../logging/logger.js'),
    blogPostsDao = require('../daoFiles/blogPostsDao.js'),
    resourceUtility = require('../../../util/resourceUtilityFunctions');

var blogPostsResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPost' : undefined,

	'availableHttpActionsObj' : { 'get' : this.get, 'post' : this.post },

  'actionDelegator' : function (req, res) {
    this.httpVerb = req.method,
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

module.exports = blogPostsResourceObject;
