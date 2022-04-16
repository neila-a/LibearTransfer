const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
// 创建 websocket 服务器 监听在 2319 端口
const wss = new WebSocketServer({ port: 2319 });
console.log(`[${new Date().toString()}] Server created.`);
// 服务器被客户端连接
wss.on('connection', function (ws) {
    console.log(`[${new Date().toString()}] Client connectioned.`);
    // 接收客户端信息并把信息返回发送
    ws.on('message', function (message) {
        ws.send(message, function (err) {
            if (err) {
                console.log(`[${new Date().toString()}] Server error: ${err}`);
            }
        });
    });
});