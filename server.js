var http = require('http'),
    router = require('./router');

var requestListener = function(request, response) {
  router(request, response);
}

http.createServer(requestListener).listen(process.env.PORT || 3000);
