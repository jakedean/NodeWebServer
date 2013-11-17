var fs = require('fs'),
    logger = require('../logging/logger.js');

var controllerNameAdder = function () {

  // Gather a list of all of the controllers
  var controllerArray = [];
  fs.readdir(__dirname, function(err, files) {
    if (err) {
      var timeStamp = new Date().getTime();
      logger(__filename, timeStamp, err);
    }
        
    for (var i = 0; i <files.length; i += 1) {
      controllerArray.push(files[i].split('Controller.js');
    }
    
    return controllerArray;
  }
}


module.exports = function () {
  return controllerNameAdder();
};
