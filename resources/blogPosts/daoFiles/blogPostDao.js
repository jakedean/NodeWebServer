var fs = require('fs'),
    logger = require('../../../logging/logger.js');

var blogPostDaoObject = {

  'dbConnection' : function() {
  	//this is our mongo connection
  }

	'search' : function (targetPost, req, res) {
      //get a specific blog post by index
	}

	'update' : function (targetPost, req, res) {
      //update a specific post by index with put data
	}
}


module.exports = function(blogPostDaoObject, req, res) {
  return blogPostDaoObject;
}