var http = require('http');
const express = require("express");
const path = require('path');

const app = express();

app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

 
app.get('/', function(request, response){
   
    
    response.sendFile(__dirname+"/views/index-SSJI.html");
    
        var data = request.query.data 
        var executeStatement = eval(data)
        console.log(b)
        

    

});


app.listen(8082);