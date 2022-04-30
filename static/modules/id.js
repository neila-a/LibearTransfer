const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(
    FingerprintJS => FingerprintJS.load()
);
fpPromise.then(function (fp) {
        return fp.get();
}).then(function (result) {
    const nid = result.visitorId;
    window.id = nid.substring(nid.length - 9);
}).catch(function (error) {
        return console.error(error);
});