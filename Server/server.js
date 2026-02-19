const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt" , log , (err, data) => {
       switch(req.url) {  // dont do work like imag processing, you will block thread pool
        case '/': res.end("HomePage");
        break;
        case '/about': res.end("I am Shreyash Kumbhar");
        break;// you can make multiple pages
        default:
            res.end("404 Not Found");
       }
    });
});

myServer.listen(8001, () => console.log("Server Started"))