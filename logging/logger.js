var fs = require('fs');

var logger = function (filename, errorInfo) {
  var baseFileName = filename.split('/').pop(),
      logFileName = baseFileName.split('.js')[0] + 'LogFile.txt',
      currentDate =  new Date();
      timeStamp = (currentDate.getMonth()+1) + '/' + currentDate.getUTCDate() + '/' + 
                  currentDate.getFullYear() + ' @ ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + 
                  currentDate.getSeconds();  
      logEntry = '------------------------------------------------------------------' + '\n' +
                  baseFileName + '\n' + timeStamp + '\n' + errorInfo +'\n' +
                 '------------------------------------------------------------------';
  fs.appendFile(__dirname + logFileName, logEntry, function(err) {
    if (err) {
      console.log('Oh no, there was an error in the logging class, the error was ' + err);
    } else {
      console.log(logEntry);
    }

  });
}
    
module.exports = function(filename, timeStamp, errorInfo) {
  return logger(filename, timeStamp, errorInfo);
}
