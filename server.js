var http = require('http');
var	express = require('./config/express');

var app = express();

var server = app.listen(process.env.PORT || config.port);
app.get("/leaderboard", function(req, res) {
  res.sendFile(__dirname+"./index.html");
});

var port = Number(process.env.PORT || 3000);

server.listen(port);
