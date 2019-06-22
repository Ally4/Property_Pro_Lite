const http = require("http");

const bodyParser = require("body-parser");

const app = require("./app");

const server = http.createServer(app);

const port = process.env.PORT || 4000;

server.listen(port);