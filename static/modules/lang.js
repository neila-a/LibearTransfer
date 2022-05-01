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
                "调色板",
                "拖动文件<br>到此处<br>上传",
                "鸣谢",
                "<p>LibearTransfer是一个传输工具。</p><p>它可以远程传输文件。</p><p>与众不同的是，</p><p>它生成的ID是唯一的。</p><p>这样，</p><p>就不用每次记码了。</p>"
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
                "Palette",
                "Drag file<br>here<br>to upload",
                "Acknowledge",
                "<p>Libeartransfer is a transfer tool. </p><p>It can transfer files remotely.</p><p>The difference is that the ID it generates is unique.</p><p>In this way，you do not have to remember the code every time.</p>"
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
                "調色板",
                "拖動檔案<br>到此處<br>上傳",
                "鳴謝",
                "<p>LibearTransfer是一個傳輸工具。</p><p>它可以遠程傳輸文件。</p><p>與眾不同的是，</p><p>它生成的ID是唯一的。</p><p>這樣，</p><p>就不用每次記碼了。</p>"
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
document.getElementsByTagName("html")[0].setAttribute("lang", eval(localStorage.language)[0]);