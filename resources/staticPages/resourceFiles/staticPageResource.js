var fs = require('fs'),
    logger = require('../../../logging/logger.js'),
    staticPageDao = require('../daoFiles/staticPageDao.js'),
    resourceUtility = require('../../../util/resourceUtilityFunctions');

var staticPageResourceObject = {

	'httpVerb' : undefined,

	'httpBody' : undefined,

	'targetPage' : undefined,

	'availableHttpActionsObj' : { 'get' : this.get, 'put' : this.put, 'delete' : this.delete },

  'actionDelegator' : function (req, res) {
    this.httpVerb = req.method,
    this.httpBody = req.body,
    this.targetPage = req.url.split('/resources/staticPage/')[1];

    if (this.httpVerb in this.availableHttpActionsObj) {
    	this.availableHttpActionsObj[this.httpVerb](req, res);
    } else {
    	resourceUtility.renderResourceNotFound(req, res);
    }

  },

  'get' : function(req, res) {
    staticPageDao.search(targetPost, req, res);
  },

  'put' : function(req, res) {
    staticPageDao.update(targetPost, req, res);
  },

  'delete' : function(req, res) {
    staticPageDao.delete(targetPost, req, res);
  }


}


module.exports = staticPageResourceObject;