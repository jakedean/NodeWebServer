var fs = require('fs'),
    logger = require('../../../logging/logger.js'),
    projectsDao = require('../daoFiles/projectsDao.js'),
    resourceUtility = require('../../../util/resourceUtilityFunctions');

var projectsResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPost' : undefined,

	'availableHttpActionsObj' : { 'get' : this.get, 'post' : this.post },

  'actionDelegator' : function (req, res) {
    this.httpVerb = req.method,
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

  'post' : function(req, res) {
    projectDao.create(targetPost, req, res);
  }


}


module.exports = projectsResourceObject;