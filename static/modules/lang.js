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
document.getElementsByTagName("html")[0].setAttribute("lang", eval(localStorage.language)[0]);