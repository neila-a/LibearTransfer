const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(
    FingerprintJS => FingerprintJS.load()
);
fpPromise.then(function (fp) {
        return fp.get();
}).then(function (result) {
    const nid = result.visitorId;
    window.id = nid.substring(nid.length - 9);
    window.peerconn = new Peer(id, {
        host: location.hostname,
        debug: 1,
        path: '/peer'
    });
}).catch(function (error) {
    return console.error(error);
});