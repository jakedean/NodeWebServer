var fs = require('fs'),
    logger = require(__dirname + '../../logger/logger.js');

var staticFileServer = function(file, res) {
  fs.readFile(file, function(err, data) {
    if (err) {
      logger(err);
    } else {
      res.write(data);
      res.end();
   }
}


module.exports = function(file, res) {
  return staticFileServer(file, res);
}
