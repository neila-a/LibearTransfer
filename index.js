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
});/*
const { Server } = require('ws');
const wss = new Server({ server });
wss.on('connection', function (ws) {
console.log('[CLIENT] Connected.');
ws.on('close', function () {
    return console.log('[CLIENT] Disconnected.');
});
ws.on('message', function (message) {
    const msg = message.toString();
    console.log("[CLIENT] Sended message.");
    ws.send(msg, function (err) {
        if (err) {
            console.log(`[SERVER] Error: ${err}`);
        }
    });
    console.log(wss.clients);
});
});
function on_server_headers(data) {
// console.log(data);
}
wss.on("headers", on_server_headers);


function websocket_add_listener(client_sock) {
// close事件
client_sock.on("close", function () {
    console.log("client close");
});
client_sock.on("error", function (err) {
    console.log("client error", err);
});
client_sock.on("message", function (data) {
    console.log(data);
    client_sock.send(data.toString());
});
}
function on_server_client_comming(client_sock) {
console.log("client comming");
websocket_add_listener(client_sock);
}

wss.on("connection", on_server_client_comming);

// error事件,表示的我们监听错误;
function on_server_listen_error(err) {
console.log(err)
}
wss.on("error", on_server_listen_error);

// headers事件, 回给客户端的字符。
function on_server_headers(data) {
console.log("data:", data);
}
wss.on("headers", on_server_headers);*/