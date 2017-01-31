var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/', routes);


app.listen(80, function () {
  console.log('Example app listening on port 80!');
});