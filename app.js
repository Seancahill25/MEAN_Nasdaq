require("./api/data/db.js");
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./api/routes');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();


app.set("port", process.env.PORT);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.use('/api', routes);

var server = app.listen(app.get("port"), function() {
    var port = server.address().port;
    console.log("listening on port " + port);  
});

module.exports = app;
