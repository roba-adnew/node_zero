import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    const fileName = 'fs.html'
    fs.readFile(fileName, (err, data) => {
        try {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
        catch (err) {
            console.log(`Error: ${err}`)
        }

    })

    fs.appendFile('newFile.txt', 'Hello again', error => {
        try {
            console.log('saved')
        }
        catch(error) {
            console.log(`Error: ${error}`)
        }
    })

    fs.unlink('newFile.txt', error => {
        try {
            console.log('deleted that guy')
        }
        catch(error) {
            console.log(`Error: ${error}`)
        }
    })
}).listen(8080);
