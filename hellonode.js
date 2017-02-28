/**
 * Created by Raka on 2/28/17.
 * Hello NodeJS Gaes :)
 */
var http    = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello NodeJs');
}).listen(8081);
console.log('Server Running with http://127.0.0.1:8081/');