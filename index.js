const cs = require("ws").Server;
var server = new cs(
    {
        port: 2319
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