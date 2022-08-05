const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Dependent of Templating engine
var nunjucks = require('nunjucks');
const port = 5062


function getHTML(input){
    var template =`<!DOCTYPE html><html><body>
    <head>
  <title>SVNA SSTI Demo</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SVNA SSTI Demo</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <!--<li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>-->
    </ul>
  </div>
</nav>
<form action="/" method="post">
<div class="input-group mb-3">
<label for="exampleInputEmail1">First Name</label>
<br>
<input type="text"  class="form-control" placeholder="Username" name="name" value="">
</div>
<br>
 <input type="submit" class="btn btn-primary" value="Submit">
    </form><br><p>Hello `+input+`</p></body></html>`
   

    nunjucks.configure({ autoescape: true });
    html = nunjucks.renderString(template, { username: 'James' });
    console.log(input)
    console.log(html);
    return html;
}


app.post('/', (request, response) => {
    var input = request.param('name', "")
    var html = getHTML(input)
    response.send(html);
})


app.get('/', (request, response) => {
    var html = getHTML("")
    response.send(html)
  })


app.listen(port, (err) => {
if (err) {
    
    return console.log('something bad happened', err)
}

console.log(`server is listening on ${port}`)
})