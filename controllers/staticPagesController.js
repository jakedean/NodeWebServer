
var fs = require('fs'),
    logger = require('../../logging/logger.js');

var actionDelegator = function(url, res) {

  var splitUrl = url.split('/');
     staticFiles = fs.readdir(__dirname + '../../views/staticFiles', function(err, files) {
                    (err) ? logger(err) : return files;
                   }
  // First we want to check if there is nothing in the url in which case we want to render home page
  if(splitUrl[0] == '') {
    if (splitUrl.length == 1) { 
      serve('index,html');
    } else if (splitUrl.length == 2 && staticFiles.indexOf(splitUrl[1])) {
     serve(splitUrl[1]);
    }
  } else {
    serve(pageNotFound.html);
  }
 
}

module.exports = function(url, res) {
  return actionDelegator(url, res);
}
