var http = require('http'),
    router = require('./routing/router.js');

var requestListener = function(request, response) {
  router(request, response);
}

http.createServer(requestListener).listen(process.env.PORT || 3000);

//This is from the master.
