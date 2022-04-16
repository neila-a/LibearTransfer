const express = require("express");
const { Server } = require('ws');
const PORT = process.env.PORT || 80;
const server = express().use(function (req, res) {
    return res.sendFile(`/static${req.url.replace(/\?.*/, "")}`, { root: __dirname });
}).listen(PORT, function () {
    return console.log(`Listening on ${PORT}`);
});
const wss = new Server({ server });
wss.on('connection', function (ws) {
    console.log('Client connected');
    ws.on('close', function () {
        return console.log('Client disconnected');
    });
    ws.on('message', function (message) {
        ws.send(message, function (err) {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    });
});