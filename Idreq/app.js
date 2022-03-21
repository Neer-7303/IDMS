
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const fs = require('fs');


var app = express();

const routes = require('./routes/routes');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(routes);
console.log("8080 => Requesting Authority");
app.listen(8080,"localhost"); 
