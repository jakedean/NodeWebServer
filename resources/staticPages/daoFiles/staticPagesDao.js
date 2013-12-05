var fs = require('fs'),
    logger = require('../../../logging/logger.js'),
    MongoClient = require('mongodb').MongoClient;

var staticPagesDaoObject = {

  'create' : function(req, res) {

  	//this is our mongo connection
  	MongoClient.connect('mongodb://127.0.0.1:27017/dev', function(err, db) {
  		if (err) {
  			logger(__filename, err);
  		}

      var collection = db.collection('staticPages'),
          myPageName = req.body.pageName, 
          myContent = req.body.myContent;

  		collection.insert({pageName:myPageName, content:myContent}, function(err, obj) {
  		  if (err) {
  		  	logger(__filename, err);
  		  }	
  			db.close();
  			res.write('The static page ' + myPageName + ' has been added to the database!');
  		});

  	});
  }

}


module.exports = staticPagesDaoObject;