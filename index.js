const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const { ExpressPeerServer } = require('peer');
const port = process.env.PORT || "80";
app.use(
    ExpressPeerServer(server, {
        proxied: true,
        debug: true,
        path: '/peer',
        ssl: {}
    })
);
app.use(express.static(path.join(`${__dirname}/static/`)));
app.get("/", function (request, response) {
    response.sendFile(`${__dirname}/static/index.html`);
});
server.listen(port, function () {
    console.log(`Listening on: ${port}`);
});