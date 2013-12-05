var http = require('http'),
    router = require('./routing/router.js'),
    routeGenerator = require('./routing/routeGenerator.js').update();

var requestListener = function(request, response) {
  router(request, response);
}

http.createServer(requestListener).listen(process.env.PORT || 3000);
