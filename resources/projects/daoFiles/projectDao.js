var fs = require('fs'),
    logger = require('../../../logging/logger.js');

var projectDaoObject = {

  'dbConnection' : function() {
  	//this is our mongo connection
  },

	'search' : function (targetProject, req, res) {
      //get a specific blog post by index
	},

	'update' : function (targetProject, req, res) {
      //update a specific post by index with put data
	}
}


module.exports = function(projectDaoObject, req, res) {
  return projectDaoObject;
}