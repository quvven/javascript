var http = require('http')
var log = require('./log')

log.error("server running");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});

    if(req.url=="/admin") {
        res.write("admin");
    } else {
        res.write("user");
    }

    res.end('bitti');
    //res.end('{"name": "server"}');
}).listen(8899);
