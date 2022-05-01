const peerconn = new Peer(window.id, {
    host: location.hostname,
    debug: 1,
    path: '/peer'
});
peerconn.on('open', function () {
});
peerconn.on('connection', function (conn) {
});
peerconn.on('call', function (call) {
});