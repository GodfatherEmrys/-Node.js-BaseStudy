var tls = require('tls');
var fs  = require('fs');

var port = 4001;
var host = '0.0.0.0';
var options = {
  key: fs.readFileSync('./clientKey.pem'),
  cert: fs.readFileSync('./clientCert.pem')
};

process.stdin.resume();

var client = tls.connect(port, host, options, function() {
  console.log('connected');
  process.stdin.pipe(client, {end: false});
  client.pipe(process.stdout);
});