var fs = require('fs'),
    logger = require('../../logging/logger.js');

var blogPostDaoObject = {

  'dbConnection' : function() {
  	//this is our mongo connection
  }

	'search' : function (data, res) {
    // get blog posts based on search criteria
	}

	'create' : function (data, res) {
    // create a new blog post
	}
}


module.exports = function(blogPostsDaoObject, req, res) {
  return blogPostsDaoObject;
}