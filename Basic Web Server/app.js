var http = require("http");

//Request object has info about their request, response object is what we send back to them
function onRequest(request, response) {
    console.log("Request from user" + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Node server!");
    response.end();
}

//Create a server and listen for requests on the port set on your IDE
http.createServer(onRequest).listen(8888);
console.log("Server is now live...");
