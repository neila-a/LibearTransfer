const peerconn = new Peer(id, {
    host: location.hostname,
    debug: 1,
    path: '/peer'
});