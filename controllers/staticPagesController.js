
var fs = require('fs'),
    logger = require('../logging/logger.js');


var actionDelegator = function(url, res) {

  var splitUrl = url.split('/');
    
  fs.readdir('/Users/Jake/Documents/node/webServer/views/staticPages', function(err, staticPages) {
    if (err) {
      logger( __filename, err);
      res.write('There was an error with the request in static pages controller!')
    } else {
      // First we want to check if there is anything in the uri in which case we want to render home page
      if (splitUrl[0] == '') {
        if (splitUrl.length == 1) { 
          serve('index.html', res);
        } else if (splitUrl.length == 2 && staticPages.indexOf(splitUrl[1]) != -1) {
         serve(splitUrl[1], res);
        } else {
          serve('pageNotFound.html',res);
        }
      } else {
        serve('pageNotFound.html',res);
      }
    }

  });
  
}

var serve = function(page, res) {
  
  fs.readFile('/Users/Jake/Documents/node/webServer/views/staticPages/' + page, function(err, data) {
    if (err) {
      logger(__filename, err);
    } else {
      res.write(data);
      res.end();
    }
  });
}

module.exports = function(url, res) {
  return actionDelegator(url, res);
}
