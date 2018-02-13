// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami/", function(req, res) {
  var ip = req.get('x-forwarded-for').split(',')[0];
  var lang = req.get('accept-language').split(',')[0];
  var os = (/\([^(]*\)/.exec(req.get('user-agent'))).toString();
  var obj = {"ipaddress": ip,"language": lang,"software": os.substr(1, os.length-2)}; 
  res.send(JSON.stringify(obj));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
