var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    mongo = require('mongo');

var staticPagesDaoObject = {

  'dbConnection' : function() {
  	//this is our mongo connection
  }

	'create' : function (targetProject, req, res) {
    //get a specific blog post by index
	}

}


module.exports = function(staticPagesDaoObject, req, res) {
  return staticPagesDaoObject;
}