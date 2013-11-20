var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    mongo = require('mongo');

var staticPageDaoObject = {

  'dbConnection' : function() {
  	//this is our mongo connection
  }

	'search' : function (targetProject, req, res) {
    //get a specific blog post by index
	}

	'update' : function (targetProject, req, res) {
    //update a specific post by index with put data
	}

  'delete' : function (targetProject, req, res) {
    //delete a specific post by index with put data
  }
}


module.exports = function(staticPageDaoObject, req, res) {
  return staticPageDaoObject;
}