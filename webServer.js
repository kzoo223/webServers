//require http module
var http = require("http");

//define port we want to listen to
var PORT = 7000;
var PORT2 = 7500;

//We need a function which handles requests and send response
function handleRequest (request, response){
  response.end("<b>ggggggrrrrrrrahhh</b>");
}

function addRequest(request, response){
  response.end("<b>panda panda panda panda</b>")
}

//create a server
var server = http.createServer(handleRequest);
var server2 = http.createServer(addRequest);

//start server
server.listen(PORT, function(){

  //callback triggered when server is successfully listening
  console.log("Server listening on: http://localhost:%s", PORT);
})


server2.listen(PORT2, function(){

  //callback triggered when server is successfully listening
  console.log("Server listening on: http://localhost:%s", PORT2);
})