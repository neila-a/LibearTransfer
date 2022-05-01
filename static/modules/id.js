const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(function (FingerprintJS) {
    return FingerprintJS.load();
});
fpPromise.then(function (fp) {
    return fp.get();
}).then(function (result) {
    const nid = result.visitorId;
    window.id = nid.substring(nid.length - 9);
    document.head.innerHTML = `${document.head.innerHTML}<script src="./modules/connect.js"></script>`;
}).catch(function (error) {
    return console.error(error);
});