var fs = require('fs');

var logger = function (filename, timeStamp, errorInfo) {
  var logFileName = filename.split('.js')[0] + 'logFile.txt',
      logEntry = '------------------------------------------------------------------' + '\n' +
                 logFileName + '\n' + timeStamp + '\n' + errorInfo +'\n' +
                 '------------------------------------------------------------------';
  fs.appendFile(__dirname + '/logFiles/' + logFileName, logEntry, function(err) {
    if (err) {
      console.log('Oh no, there was an error in the logging class, the error was ' + err);
    } else {
      console.log(logEntry);
    }

  }
}
    
module.exports = function(filename, timeStamp, errorInfo) {
  return logger(filename, timeStamp, errorInfo);
}
