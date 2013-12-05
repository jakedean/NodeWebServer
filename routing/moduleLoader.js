var fs = require('fs'),
    logger = require('../logging/logger.js');

//This will load the controllers or the resources for a given controller

var routingModule = {

	'get' : { 'controllerCollection' : {}, 'controllerArray' : [],
            'resourceCollection' : {}, 'resourceArray' : [] },

  'populateRoutingObject' : function(target, cb) {

  	var baseNameSplitter, targetDirectory, get = this.get;

  	if (target === 'controllers') {
  		baseNameSplitter = 'Controller';
  		targetDirectory = './controllers/';
  	} else {
  		baseNameSplitter = 'Resource';
  		targetDirectory = './resources/' + target + '/resourceFiles/';
  	}

		fs.readdir(targetDirectory, function(err, files) {

			if (err) {
				logger(__filename, err);
			} else {

			  var fullName, baseName, arrayName;

			  for (var i = 0; i < files.length; i += 1) {
			
			  	fullName = files[i];
			  	baseName = fullName.split('.')[0];
			  	arrayName = baseName.split(baseNameSplitter)[0];

	        if (target === 'controllers') {
	          get.controllerCollection[baseName] = require('../controllers/' + fullName);
	          get.controllerArray.push(arrayName);
	        } else {
	          get.resourceCollection[baseName] = require('../resources/' + target + '/resourceFiles/' + fullName);
	          get.resourceArray.push(arrayName);
	        }
			    
			  }
			  cb();
			}
			
	  });
  }

}


module.exports = routingModule;
