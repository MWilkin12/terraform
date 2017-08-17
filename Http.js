//load the http module to create http server
var http = require('http');
var host = "34.201.3.219";
var port = 1500;
var fs = require("fs");

console.log("Starting");



// Listening and connection details


//Configure our HTTP Server tp respond with Hello World to all requests
var server = http.createServer(function(request,response) {
	console.log("Received request: " + request.url);
	fs.readFile("./resources" + request.url, function(error, data) {
			if (error) {
				response.writeHead(404, {"Content-Type": "text/plain"});
				response.end("Sorry the page was not found");
			} else {
				response.writeHead(200, {"Content-Type": "text/html"});
				response.end(data);
			}
	})
});


//Listen on port (N), IP defaults to 127.0.0.1
	server.listen(port);
//Put a friendly message on the terminal
	console.log("Listening on port: " + port)
