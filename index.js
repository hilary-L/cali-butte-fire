var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/mapbox.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("App listening on port 3000");
});

module.exports = app;

