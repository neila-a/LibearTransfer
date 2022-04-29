const express = require("express");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { ExpressPeerServer } = require('peer');
const PORT = process.env.PORT || 80;
const httpserver = http.createServer();
var server = ExpressPeerServer(httpserver, {
    path: "./static/",
    port: PORT
});
const webserver = express().use(
    server
).use(
    express.static(path.join("./static/"))
).get(
    "/",
    function (request, response) {
        response.sendFile("./static/index.html");
    }
);
server.listen(PORT);/*
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