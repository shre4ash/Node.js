//No Need to this
//const http = require("http");
const express = require("express");

const app = express()

app.get('/', (req, res) => {
    return res.send('Hello From Home Page');
});

app.get('/about', (req, res) => {
    return res.send("Hello From About page");
});

function myHandler(req, res) {
    if (req.url === "/favicon.icon") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if (req.method === "GET") res.end("HomePage");
                break;
                case "/about":
                    const username = myUrl.query.myname;
                    res.end(`Hi,${username}`);
                    break;
                    case "/search":
                        const search = myUrl.query.search_query;
                        res.end("Here are your result for " + search);
                        case  "/signup":
                            if(req.method === "GET") res.end("This is a signup Form");
                            else if (req.method === "POST") {
                                // query
                                res.end("Sucess");
                            }
                        default:
                            res.end("404 Not Found");
        }
    });
}

// NO need to write this 
// const myServer = http.createServer(app);

// myServer.listen(5001, () => console.log("Server Started"))

app.listen(5001, () => console.log("Server Started!"));