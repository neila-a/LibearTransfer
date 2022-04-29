const express = require("express");
const fs = require('fs');
const { Server } = require('ws');
const peer = require('peer');
const PORT = process.env.PORT || 80;
var server = peer.PeerServer({
    port: 81,
    ssl: {
        cert: `-----BEGIN CERTIFICATE-----\r\nMIIF1jCCBL6gAwIBAgIQDebbxwy5JVXnMYz5Yes8aTANBgkqhkiG9w0BAQsFADBG\r\nMQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRUwEwYDVQQLEwxTZXJ2ZXIg\r\nQ0EgMUIxDzANBgNVBAMTBkFtYXpvbjAeFw0yMTA2MDEwMDAwMDBaFw0yMjA2MzAy\r\nMzU5NTlaMBoxGDAWBgNVBAMMDyouaGVyb2t1YXBwLmNvbTCCASIwDQYJKoZIhvcN\r\nAQEBBQADggEPADCCAQoCggEBAJplaY2x1xBBds59MBCnOUf7a1sV+0NyqEVRHZo4\r\ny9r4Ni9UZFsNpUqLb8ZB4jz3RStYRWD/YLoyj6Hj9K7YvO6xXiTO1w8D6yxwc/Yk\r\nI0wSSrMTtKmS12xMlRVp/fvBmpnIE9qEwb2xqQabLjmSCRXTkFUZdEtOEHvWwXOs\r\nORdejdfL5AGXMoosjEtmEOB58qoec6ILYFX9i6AIzE1BthEWLWvmta5o9RNFkAv+\r\nP5wreeiBHeJorUIk3jtmvwyfY9FpjFHnqh28ztiEXuXzoNRxWhJfWN9iswHtE/QT\r\nTNOqwAgVL/QIAlonLeVgBJDgZuY6/sbwibI/H9VkGQu81LcCAwEAAaOCAuowggLm\r\nMB8GA1UdIwQYMBaAFFmkZgZSoHuVkjyjlAcnlnRb+T3QMB0GA1UdDgQWBBQKisjn\r\n/c5d5Q2ccQMdRyD/0ffgKjAaBgNVHREEEzARgg8qLmhlcm9rdWFwcC5jb20wDgYD\r\nVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjA7BgNV\r\nHR8ENDAyMDCgLqAshipodHRwOi8vY3JsLnNjYTFiLmFtYXpvbnRydXN0LmNvbS9z\r\nY2ExYi5jcmwwEwYDVR0gBAwwCjAIBgZngQwBAgEwdQYIKwYBBQUHAQEEaTBnMC0G\r\nCCsGAQUFBzABhiFodHRwOi8vb2NzcC5zY2ExYi5hbWF6b250cnVzdC5jb20wNgYI\r\nKwYBBQUHMAKGKmh0dHA6Ly9jcnQuc2NhMWIuYW1hem9udHJ1c3QuY29tL3NjYTFi\r\nLmNydDAMBgNVHRMBAf8EAjAAMIIBgAYKKwYBBAHWeQIEAgSCAXAEggFsAWoAdwAp\r\neb7wnjk5IfBWc59jpXflvld9nGAK+PlNXSZcJV3HhAAAAXnIoyDSAAAEAwBIMEYC\r\nIQDQWuTUdavEy3eHeOWjDzr0LVEkZV2EzifZsVK9EAT5PgIhAM0r8kHIqVG8H2uu\r\n5CL5Aj7MLnkicKXPsG9zf5YT4hCLAHYAIkVFB1lVJFaWP6Ev8fdthuAjJmOtwEt/\r\nXcaDXG7iDwIAAAF5yKMgnwAABAMARzBFAiBgjdEcX3kcPNInyNiZhed7jkehOy2v\r\n8oT7XyFyy60/TgIhAIoGRgagHdwtUWPdKyhqrO3l/9iC5ggyu4Rw7W6Y4RJnAHcA\r\nUaOw9f0BeZxWbbg3eI8MpHrMGyfL956IQpoN/tSLBeUAAAF5yKMg5gAABAMASDBG\r\nAiEAzyzx4HaKJ8ILbWsKdagR3bUqXkDx8Ip5IouB+OxUj2cCIQDx2F2wJQMgYIBE\r\nc2DRIA+GC/hgtlm2zBfuSSU04gVPuDANBgkqhkiG9w0BAQsFAAOCAQEAWM0Am7gO\r\n9IrGHlrCaD/msl938vrCmW6mAj7UEQMJSETw2vsiJ+2VZ6fAwqHkXHDbin+uysDM\r\n//9fjAuDfdWwJ0CJh1Z1nUtPB9Pa1ept+9Yfz3DU9oGLSniXLl686B/NG5+4TujZ\r\niEEuMsgfcxiiGJntuM4ay2Dx+u8/Aqo4R6NwbCZGJCaIlWFiYb8I7lc8TzUs0+IB\r\nSgkVfg613kZmZGcLUTYZ1k83UmW0IJ7kYIo7fAaz1HRSf88w26paAxN5mj/QxUSc\r\nsJBOe74R8j1Uy4wOGimDI0isDKdYs5yrzzgL05RYuqjh89R1qqtF0PcWxd+pjwdU\r\nFtUlQHgP0KPPbw==\r\n-----END CERTIFICATE-----\r\n`
    },
    path: "/"
});/*
const wss = new Server({ server });
const webserver = express().use(function (req, res) {
    return res.sendFile(`/static${req.url.replace(/\?.* /, "")}`, { root: __dirname });
}).listen(PORT, function () {
    return console.log(`Listening on port ${PORT}.`);
});/*
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