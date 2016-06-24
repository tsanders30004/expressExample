var express = require('express');
var myApp = express();
var bodyParser = require('body-parser');

myApp.use(bodyParser.urlencoded({extended: false}));
myApp.set('view engine', 'hbs');
myApp.use(express.static('public'));

myApp.get('/', function(request, response){
     response.redirect('/home');
});

myApp.get('/home', function(request, response){
     response.render('home', {
          title: 'My Portfolio'
     });
});

myApp.get('/about', function(request, response){
     response.render('about', {
          title: 'About Me'
     });
});

myApp.get('/projects', function(request, response){
     response.render('projects', {
          title: 'My Projects'
     });
});

myApp.get('/form', function(request, response){
     response.render('form', {
          title: 'Contact Form'
     });
});

myApp.post('/submit', function(request, response) {
  var data = request.body;
  console.log(data);
  response.send('form processed');
});

myApp.listen(3000, function(){
     console.log('listening on port 3000');
});
