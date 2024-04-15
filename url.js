import url from 'url';
import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const fileName = `.${parsedURL.pathname}`;
    console.log(fileName);
    fs.readFile(fileName, function (error, data) {
        if (error) {
            console.log(fileName);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080);