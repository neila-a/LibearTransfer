const initmount = function () {
    var langs = eval(localStorage.language);
    mount("send").as(langs[2]);
    mount("connect").as(`${langs[3]}`);
    mount("transfile").as(langs[4]);
    mount("transtext").as(langs[5]);
    mount("help").as(langs[6]);
    mount("language").as(langs[7]);
    mount("selectlang").as(langs[8]);
    mount("or").as(langs[9]);
    mount("uploadnewlang").as(langs[10]);
    mount("cleanalllang").as(langs[11]);
    mount("about").as(langs[12]);
    mount("theme").as(langs[13]);
    mount("palette").as(langs[14]);
}
initmount();
mount("style").as(`
    img {
        margin-top: ${screen.availHeight / 2 - 200}px;
    }
`);
document.body.style.setProperty("--theme-color", localStorage.theme_color);
var value = document.querySelector("progress").value;
if (value < 10) value = `0${value.toString()}`;
if (value == 100) {
    value = 0;
    alert(`文件已发送成功。`);
}
/*$("p#jindu").inner(`${value}%`);*//*
var snode = document.createElement("style");
var height = $(".col-md-1").get(0).offsetHeight + $(".col-md-2").get(0).offsetHeight + 30;
console.log(height);
snode.innerHTML = `
    div#status>p {
        top: ${height}px;
    }
`;
document.head.appendChild(snode);*/
document.querySelector("#text").style.height = document.body.clientHeight/*Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)*/;