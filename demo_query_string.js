import http from 'http'
import url from 'url'


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const q = url.parse(req.url, true).query;
    const txt = `${q.name} ${q.month}`
    res.end(txt);
}).listen(8080)