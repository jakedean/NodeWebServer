
var fs = require('fs'),
    http = require('http'),
    logger = require('../logging/logger.js');


var actionDelegator = function(req, res) {

  var splitUrl = req.url.split('/');
    
  fs.readdir('./views/staticPages', function(err, staticPages) {
    if (err) {
      logger( __filename, err);
      res.write('There was an error with the request in static pages controller!')
    } else {
      // First we want to check if there is anything in the uri in which case we want to render home page
      if (splitUrl[0] == '') {
        if (splitUrl.length == 1) { 
          makeResourceCall(req, res, 'index.html');
        } else if (splitUrl.length == 2 && staticPages.indexOf(splitUrl[1]) != -1) {
         makeResourceCall(req, res, splitUrl[1]);
        } else {
          makeResourceCall(req, res, 'pageNotFound.html');
        }
      } else {
        makeResourceCall(req,res,'pageNotFound.html');
      }
    }

  });
  
},

//to get our static pages resources
var staticPagesResource = function(req, res) {
  routingObject.populateRoutingObject('staticPages', function() {

    var resourceCollection = resourcesObject.get.resourceCollection, 
        potentialResource = url.split('/')[2],
        callThisResource;

    if (potentialResource in resourceCollection) {
      resourceCollection.potentialResource(req, res);
    } else {
      serve('serviceNotFound.html', res);
    }

  });
      
},

var makeResourceCall = function(req, res, page) {

  // Now we are going to make a web services call to the static pages resource to
  // get the data to fill in the page

  var basePage = page.split('.')[0], 
      staticPageOptions = { host : req.headers.host, 
                            port : req.headers.port, 
                            path : '/resources/staticPage/' + basePage,
                            method : req.method 
                            data : req.body },
      dataToServe = '',
      resourceCall = http.request(staticPageOptions, function(res) {

        res.on('data', function(chunk) {
          dataToServe += chunk;
        });

        res.on('end', function () {
          serve(req, res, page, dataToServe);
          resourceCall.end();
        })

      });
  
  resourceCall.on('error', function(err) {
    logger(__filename, err);
  });
  
}

var serve = function (req, res, page, dataToServe) {

  fs.readFile('./views/staticPages/' + page, function(err, data) {
          if (err) {
            logger(__filename, err);
          } else {
            res.write(data);
            res.end();
          }
  });

}

module.exports = function(req, res) {
  return actionDelegator(req, res);
}
