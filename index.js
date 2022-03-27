require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var params = require('url').parse(req.url, true).query;
    new require("pusher")({
        appId: "1367653",
        key: "68d011b9b45b3e0b44ff",
        secret: "286d65f732a96f6d460b",
        cluster: "ap3",
        useTLS: true
    }).trigger("files", params.to, {
        message: params.data
    });
    res.write('{ "status": "OK" }');
    res.end();
}).listen(80, function () {
    console.log(`Server listened on port 80.\nClick Ctrl+C to close.`);
});