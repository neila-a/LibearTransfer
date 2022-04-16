const Pusher = require("pusher");
const url = require("url");
const http = require("http");
const push = new Pusher({
    appId: "1367653",
    key: "68d011b9b45b3e0b44ff",
    secret: "286d65f732a96f6d460b",
    cluster: "ap3",
    useTLS: true
});
var server = http.createServer();
server.on("request", function (req, res) {
    try {
        const params = url.parse(req.url, true).query;
        push.trigger("my-channel", "my-event", {
            message: params.msg
        });
    } catch {
        res.end("{ \"status\": \"error\"}");
        return;
    }
    res.end("{ \"status\": \"OK\"}");
    return;
});
server.listen(80);