var http = require("http");

http
  .createServer(function (request, response) {
    console.log("request", request);
    if (request.url.includes('hub.challenge')) {
			hub_challenge = request.url.match(/hub\.challenge=([^&]*)/)[1];
      response.write(hub_challenge);
    } else {
      response.write("Hello World!");
    }
    response.end();
  })
  .listen(8125);
console.log("listening on port 8125");
