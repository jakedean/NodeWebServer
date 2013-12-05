var fs = require('fs'),
    logger = require('../../../logging/logger.js'),
    staticPagesDao = require('../daoFiles/staticPagesDao.js'),
    resourceUtility = require('../../../util/resourceUtilityFunctions');

var staticPagesResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPage' : undefined,

	'availableHttpActionsObj' : { 'post' : this.post },

  'actionDelegator' : function (req, res) {
    
    this.httpVerb = req.method,
    this.httpBody = req.body,
    this.targetPage = req.url.split('/services/staticPages/')[1];

    if (this.httpVerb in this.availableHttpActionsObj) {
    	this.availableHttpActionsObj[this.httpVerb](req, res);
    } else {
    	resourceUtility.renderResourceNotFound(req, res);
    }

  },

  'post' : function(req, res) {
    staticPagesDao.update(targetPost, req, res);
  }

}


module.exports = staticPagesResourceObject;