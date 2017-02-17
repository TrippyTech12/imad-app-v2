var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


//Getting HTML file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


//Getting style.css file
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


//JAVASCRIPT Getting main.js
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

        //IMAGES//
        
        //Getting Dipanjan Das display image
        app.get('/ui/FunDodo3.png', function (req, res) {
          res.sendFile(path.join(__dirname, 'ui', 'FunDodo3.png'));
        });
        
        
        //Getting bottom background image
        app.get('/ui/Backroundcity1.png', function (req, res) {
          res.sendFile(path.join(__dirname, 'ui', 'Backroundcity1.png'));
        });


//Defing the port the app will listen to
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
