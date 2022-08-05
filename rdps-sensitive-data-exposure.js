var http = require('http');
const express = require("express")
const path = require('path')
 
const app = express();

app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


 token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiaWF0IjoxNDU5NDQ4MTE5LCJleHAiOjE0NTk0NTQ1MTl9._PV18lpLyHSY2Hg5N08n9xbteLM6m4TeibuBpa5P854";
 
 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.header('Authorization', 'Bearer '+ token);
     response.sendFile(__dirname+"/views/index.html");
 });
 
// var data = {};
app.get('/config.json', (request, response) => {
  console.log(response)
  response.sendFile(path.join(__dirname, '', 'config.json'));
});

 app.listen(8081);
 



