var fs = require('fs'),
    logger = require('../../logging/logger.js'),
    mongo = require('mongo');

var projectDaoObject = {

  'dbConnection' : function() {
    //this is our mongo connection
  }

  'search' : function (targetProject, req, res) {
    // get a project based on search criteria
  }

  'create' : function (targetProject, req, res) {
    // add a project to the collection
  }
}


module.exports = function(projectDaoObject, req, res) {
  return projectDaoObject;
}