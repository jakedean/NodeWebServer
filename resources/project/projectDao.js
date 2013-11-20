var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    mongo = require('mongo');

var projectDaoObject = {

  'dbConnection' : function() {
  	//this is our mongo connection
  }

	'search' : function (targetProject, req, res) {
      //get a specific blog post by index
	}

	'update' : function (targetProject, req, res) {
      //update a specific post by index with put data
	}
}


module.exports = function(projectDaoObject, req, res) {
  return projectDaoObject;
}