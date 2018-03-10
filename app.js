var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');


var app = express();

app.set("port", process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

var server = app.listen(app.get("port"), function() {
    var port = server.address().port;
    console.log("listening on port " + port);  
});

module.exports = app;