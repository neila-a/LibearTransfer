peerconn.on('open', function () {
});
peerconn.on('connection', function (conn) {
    window.send = (i) => conn.send(i);
    console.log(window.send);
    conn.on("data", (data) => new (data));
});
peerconn.on('call', function (call) {
});