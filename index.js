const express = require("express");
const { Server } = require('ws');
const PORT = process.env.PORT || 80;
const server = express().use(function (req, res) {
    return res.sendFile(`/static${req.url.replace(/\?.*/, "")}`, { root: __dirname });
}).listen(PORT, function () {
    return console.log(`Listening on port ${PORT}.`);
});
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
        var c = "";
        wss.clients.forEach(function (item) {
            c = c + item.toString();
        });
        ws.send(c)
    });
});
function on_server_headers(data) {
    // console.log(data);
}
wss.on("headers", on_server_headers);

/*
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