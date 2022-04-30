const mount = function (arg) {
    return {
        arg: arg,
        as: function (a) {
            eval(`window.mounts.${this.arg} = \`${a}\`;`);
            var els = document.querySelectorAll(`*[mount="${this.arg}"]`);
            for (let i = 0; i < els.length; i++) {
                els[i].innerHTML = eval(`window.mounts.${els[i].getAttribute("mount")}`);
            }
        }
    };
};
window.mounts = {};
class Popup {
    constructor(text) {
        var random = `popup-box-${Math.random().toString().replace(/\./g, "")}`;
        var box = document.createElement("div");
        box.id = random;
        box.style.cssText = "opacity: 1; transform: scale(1);";
        box.classList.add("popup");
        box.innerHTML = `
            <span class="close-btn" tabindex="0" role="button" aria-label="关闭" onclick="this.parentElement.outerHTML = '';"></span>
            <div style="text-align: center; overflow: auto; margin: 2%;height: 100%;">
                ${text}
            </div>
        `;
        document.body.appendChild(box);
        this.htmlobject = document.getElementById(random);
    }
}
const upload = function (event) {
    const file = event.target.files[0];
    var outputtext = `[FileReader] 已读取'${file.name}'，最后修改时间是${file.lastModifiedDate}，类别是${file.type}，大小是${file.size}字节。`;
    console.log(outputtext);
    const reader = new FileReader();
    const id =
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
const uploadlang = function (event) {
    const file = event.target.files[0];
    var outputtext = `[FileReader] 已读取'${file.name}'，最后修改时间是${file.lastModifiedDate}，类别是${file.type}，大小是${file.size}字节。`;
    console.log(outputtext);
    const reader = new FileReader();
    reader.onloadend = function (arg) {
        const result = JSON.parse(reader.result);
        localStorage.setItem("langlist", `
            ${localStorage.langlist.substring(0, localStorage.langlist.length - 1)}
            ,[
                "${result.main}"
            ]]
        `);
        location.reload();
    };
    return reader.readAsText(file);
};
const refreshlang = function () {

};
if (localStorage.langlist == "undefined" || localStorage.langlist == undefined) {
    localStorage.setItem("langlist", `
        [
            [
                "zh-cn",
                "简体中文",
                "发送",
                "连接",
                "传输文件",
                "传输文本",
                "帮助",
                "语言",
                "选择语言",
                "或",
                "上传新的语言",
                "清空所有自添加语言",
                "关于",
                "主题",
                "调色板"
            ],
            [
                "en",
                "English",
                "Send",
                "Connect",
                "Transfer file",
                "Transfer text",
                "Help",
                "Language",
                "Select language",
                "or",
                "Upload new language",
                "Clear all self added languages",
                "About",
                "Theme",
                "Palette"
            ],
            [
                "zh-tr",
                "繁體中文",
                "發送",
                "連接",
                "傳輸文件",
                "傳輸文字",
                "幫助",
                "語言",
                "選擇語言",
                "或",
                "上傳新的語言",
                "清空所有自添加語言",
                "關於",
                "主題",
                "調色板"
            ]
        ]`.replace(/\n/g, "").replace(/    /g, "")
    );
}
if (localStorage.language == undefined || localStorage.language == "undefined") {
    var lang;
    eval(localStorage.langlist).forEach(
        function (item) {
            if (item[0] == "zh-cn") lang = `["${item.toString().replace(/,/g, "\",\"")}"]`;
        }
    );
    localStorage.setItem("language", lang);
}
const showlanguage = function () {
    const langlist = eval(localStorage.langlist);
    var selectinner = "";
    langlist.forEach(
        function (item) {
            var toString = `[\\'${item.toString().replace(/,/g, "\\',\\'").replace(/"/g, "\\'")}\\']`;
            selectinner = selectinner + `
                <div class="option" onclick="
                    localStorage.setItem('language', '${toString}');
                    initmount();
                ">
                    <div class="radio">
                        <input type="radio" value="${item[0]}" name="language" id="${item[0]}" checked="true" />
                        <label for="${item[0]}">
                            ${item[1]}
                        </label>
                    </div>
                </div>
            `;
        }
    );
    new Popup(`
        <h2 mount="selectlang"></h2>
        <from action="set" method="get">
            <div id="select">
                ${selectinner}
            </div>
            <br>
            <br>
            <p mount="or"></p>
            <button type="submit" onclick="document.querySelector('#foruploadlang').click();" mount="uploadnewlang"></button>
            <br>
            <br>
            <button type="submit" onclick="localStorage.setItem('langlist',undefined);location.reload();" mount="cleanalllang"></button>
        </from>
    `);
    initmount();
    mount("style").as(`
        img {
            margin-top: ${screen.availHeight / 2 - 200}px;
        }
    `);
};
const showfile = function () {
    var popupbox = new Popup(`
        <div id="title">
            <h2 mount="transfile"></h2>
        </div>
        <div id="up">
            <div id="space"></div>
            <button id="send" onclick="document.querySelector('#forupload').click();" mount="send"></button>
        </div>
        <div id="dragaera" draggable="true"></div>
    `);
    initmount();
    document.getElementById("space").style.height = `${390 / 2 - document.getElementById("title").clientHeight}px`;
};
const showtext = function () {
    new Popup(`
        <h2 mount="transtext"></h2>
    `);
    initmount();
};
const showhelp = function () {
    new Popup(`
        <h2 mount="help"></h2>
    `);
    initmount();
};
const showconn = function () {
    new Popup(`
        <h2 mount="connect"></h2>
    `);
    initmount();
};
const showabout = function () {
    new Popup(`
        <h2 mount="about"></h2>
    `);
    initmount();
};
const noti = function (t, b) {
    Notification.requestPermission().then(function (permission) {
        // 如果用户接受权限，我们就可以发起一条消息
        if (permission === "granted") {
            var notification = new Notification(t, {
                dir: "auto",
                lang: "zh-CN",
                tag: "msg",
                icon: "https://s1.ax1x.com/2022/04/28/LjF3MF.png",
                body: b
            });
        }
    });
};
document.getElementsByTagName("html")[0].setAttribute("lang", eval(localStorage.language)[0]);
if (localStorage.theme_color == undefined) localStorage.setItem("theme_color", "#1e9fff");
const showtheme = function () {
    window.paletteonchange = function (event) {
        const { value } = document.querySelector("input[type=\"color\"");
        document.body.style.setProperty("--theme-color", value);
        localStorage.setItem("theme_color", value);
    };
    new Popup(`
    	<h2 mount="theme"></h2>
    	<h3 mount="palette"></h3>
    	<input type="color" value="${localStorage.theme_color}" onchange="paletteonchange(event);"/>
    `);
    initmount();
};/*
var href = location.href;
var websocketdatas = [];
window.ws_conn = new WebSocket(href.substring(0, href.length - 1).replace("http", "ws"));
const conninit = function () {
    window.ws_conn.onopen = function (event) {
        //当WebSocket创建成功时，触发onopen事件
        websocketdatas.push("WebSocket连接已创建.");
    };
    window.ws_conn.onmessage = function (event) {
        //当客户端收到服务端发来的消息时，触发onmessage事件，参数e.data包含server传递过来的数据
        console.log(event.data);
    };
    window.ws_conn.onerror = function (error) {
        //如果出现连接、处理、接收、发送数据失败的时候触发onerror事件
        console.error(`WebSocket错误: ${error}`);
    };
}
conninit();
ws_conn.onclose = function (event) {
    //当客户端收到服务端发送的关闭连接请求时，触发onclose事件
    websocketdatas.push("WebSocket连接已关闭。");
    window.ws_conn = new WebSocket(href.substring(0, href.length - 1).replace("http", "ws"));
    conninit();
    window.ws_conn.onclose = window.oldonclose;
};
window.oldonclose = ws_conn.onclose;*/
