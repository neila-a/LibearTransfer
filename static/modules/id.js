const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(function (FingerprintJS) {
    return FingerprintJS.load();
});
fpPromise.then(function (fp) {
    return fp.get();
}).then(function (result) {
    const nid = result.visitorId;
    window.id = nid.substring(nid.length - 9);
    window.peerconn = new Peer(window.id, {
        host: "libeartransfer.herokuapp.com",
        debug: 1,
        path: "/peer"
    });    
    document.head.innerHTML = `${document.head.innerHTML}<script src="./modules/connect.js"></script>`;
}).catch(function (error) {
    return console.error(error);
});