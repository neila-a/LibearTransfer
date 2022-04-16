const mount = function (arg) {
    if (arg == undefined) {
        var els = document.querySelectorAll("*");
        var hasMountPropertyEls = [];
        for (let i = 0; i < els.length; i++) {
            var attr = els[i].getAttribute("mount");
            if (attr == null) {
                els[i].innerHTML = eval(`window.mounts.${attr}`);
            }
        }
    } else {
        return {
            arg: arg,
            as: function (a) {
                eval(`window.mounts.${this.arg} = \`${a}\`;`);
            }
        };
    }
};
window.mounts = {};
var ws_conn = new WebSocket("ws://libeartransfer-backstage.herokuapp.com");
ws_conn.onopen = function (event) {
    //当WebSocket创建成功时，触发onopen事件
    alert("连接已创建");
};
ws_conn.onmessage = function (event) {
    //当客户端收到服务端发来的消息时，触发onmessage事件，参数e.data包含server传递过来的数据
    console.log(e.data);
};
ws_conn.onclose = function (event) {
    //当客户端收到服务端发送的关闭连接请求时，触发onclose事件
    console.warn("WebSocket Connect Closed.");
    alert("WebSocket连接已关闭！");
};
ws_conn.onerror = function (error) {
    //如果出现连接、处理、接收、发送数据失败的时候触发onerror事件
    console.error(error);
    alert(`错误`);
};
console.log(ws_conn);
class PopupBox {
    constructor(text) {
        var random = `popup-box-${Math.random()}`;
        var box = document.createElement("div");
        box.id = random;
        box.style.cssText = "opacity: 1; transform: scale(1);";
        box.classList.add("popup");
        box.innerHTML = `
            <span class="close-btn" tabindex="0" role="button" aria-label="关闭" onclick="document.getElementById('${random}').outerHTML = '';"></span>
            <div style="text-align: center; overflow: auto; margin: 2%;">
                ${text}
            </div>
        `;
        document.body.appendChild(box);
    }
}
const upload = function (event) {
    const file = event.target.files[0];
    var outputtext = `[FileReader] 已读取'${file.name}'，最后修改时间是${file.lastModifiedDate}，类别是${file.type}，大小是${file.size}字节。`;
    console.log(outputtext);
    const reader = new FileReader();
    reader.onloadend = function (arg) {
        const toSend = {
            by: id,
            send: reader.result,
            lastModifiedDate: file.lastModifiedDate,
            type: file.type,
            size: file.size,
            name: file.name
        }
        ws_conn.send(JSON.stringify(toSend));
    };
    return reader.readAsDataURL(file);
}