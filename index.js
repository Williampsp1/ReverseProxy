const https = require('https');
const httpProxy = require('http-proxy');
const fs = require("fs");

var proxy = httpProxy.createProxyServer();

var server = https.createServer(
  {
    key: fs.readFileSync('private'),//This is the private key
    cert: fs.readFileSync('certificate'), //This is the certificate (public key)
  }, function (req, res) {
    console.log("Proxying to 80");
    proxy.web(req, res, {
      target: 'http://127.0.0.1:80',
    }
    );
  });


console.log("listening on port 443")
server.listen(443);