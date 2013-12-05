var fs = require('fs'),
    routingObject = require('./routingObjectReturner.js'),
    logger = require('../logging/logger.js');

routesObject = {

	'routeMethods' : { 'get' : [], 'post' : [], 'put' : [], 'delete' : [] },
 	
 	'numberOfResources' : undefined,

 	'populateRoutesObjectCalled' : 0,

 	'formatTheRoutesCalled' : 0,

 	'numberRouteMethods' : undefined,

 	'routesString' : '',

	'update' : function() {
		var that = this;
		fs.readdir('../resources/', function(err, directories) {
		
			if (err) {
				logger(__filename, err);
			} else {
        
        that.numberOfResources = directories.length;
				for (var i = 0; i < directories.length; i += 1) {
					var directory = directories[i];
					that.populateRoutesObject(directory);
				}
				
			}

		});
	},

	'populateRoutesObject' : function (directory) {
		var that = this;
    fs.readdir('../resources/' + directory + '/resourceFiles/', function(err, files) {
    	if (err) {
    		logger(__filename, err);
    	} else {

    		for (var j = 0; j < files.length; j += 1) {

    			availableHttpActionsObj = require('../resources/' + directory + '/resourceFiles/' + files[j])['availableHttpActionsObj'];
    			for (key in availableHttpActionsObj) {
    				if (that['routeMethods'][key].indexOf(files[j].split('Resource.js')[0]) == -1) {
    					that['routeMethods'][key].push(files[j].split('Resource.js')[0]);
    				}
    			}
    			
    		}
    		that.populateRoutesObjectCalled += 1;
    		if (that.populateRoutesObjectCalled == that.numberOfResources) {
    			that.writeTheRoutesFile();
    		}
    	}
    });
	},

	'writeTheRoutesFile' : function () {
		var callback = function (theData) { 
			               fs.writeFile('./routes.js', theData, function(err) {
			    	           if (err) { logger(__filename, err); } 
			                });
			              };

    this.formatTheRoutes(callback);
	},

	'formatTheRoutes' : function (cb) {
		console.log(this['routeMethods']);
		var controller;
		this.numberRouteMethods = Object.keys(this['routeMethods']).length;
		console.log(this.numberRouteMethods);
		for (var routeMethod in this['routeMethods']) {
			console.log(routeMethod);
			console.log(routeMethod.length);
			//this.formatTheRoutes2(routeMethod, cb);
		}
	},

	'formatTheRoutes2' : function (routeMethod) {
    for (var i = 0; i < routeMethod.length; i += 1) {
      console.log(routeMethod);
    	console.log('this is the length');
    	console.log(routeMethod.length);
      
      console.log(this['routeMethods'][routeMethod]);
			console.log(this['routeMethods'][routeMethod][i]);
			
			if (this['routeMethods'][routeMethod][i][-1] !== 's') {
				controller = this['routeMethods'][routeMethod][i] + 's';
			} else {
				controller = this['routeMethods'][routeMethod][i];
			}
			this.data += routeMethod + '=>' + this['routeMethods'][routeMethod][i] +'=>controller' + controller + '\n\n';
	
		}
		this.formatTheRoutesCalled += 1;
		if (this.formatTheRoutesCalled == this.numberRouteMethods) {
			cb(this.data); 
		}
	}
	
}


module.exports = routesObject;

