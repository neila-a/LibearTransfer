window.mounts = {};
initmount();
mount("style").as(`
    img {
        margin-top: ${screen.availHeight / 2 - 200}px;
    }
`);
document.body.style.setProperty("--theme-color", localStorage.theme_color);
/*var value = document.querySelector("progress").value;
if (value < 10) value = `0${value.toString()}`;
if (value == 100) {
    value = 0;
    alert(`文件已发送成功。`);
}
$("p#jindu").inner(`${value}%`);
var snode = document.createElement("style");
var height = $(".col-md-1").get(0).offsetHeight + $(".col-md-2").get(0).offsetHeight + 30;
console.log(height);
snode.innerHTML = `
    div#status>p {
        top: ${height}px;
    }
`;
document.head.appendChild(snode);
document.querySelector("#text").style.height = document.body.clientHeight/*Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)*/