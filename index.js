const cs = require("ws").Server;
var port = process.env.PORT || 2319;
console.log(port);
var server = new cs(
    {
        port: port
    }
);
server.on(
    "connection",
    function (ws) {
        console.log("[CLIENT CONNECTIONED]");
        ws.on(
            "close",
            function () {
                console.log("[CLIENT CLOSED]");
            }
        );
        ws.on(
            "error",
            function (err) {
                console.error(`[CLIENT ERROR]: ${err}`);
            }
        );
        ws.on(
            "message",
            function (data) {
                ws.send(data);
            }
        );
    }
);
server.on(
    "error",
    function (err) {
        console.error(`[SERVER ERROR]: ${err}`);
    }
);
console.log("[SERVER OPENED]");
