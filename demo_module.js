import http from 'http'
import myDateTime from './myfirstmodule.js'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + myDateTime());
  res.end();
}).listen(8080);