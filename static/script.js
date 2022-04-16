var value = $("progress").val();
if (value < 10) value = `0${value.toString()}`;
if (value == 100) {
    value = 0;
    alert(`文件已发送成功。`);
}
$("p#jindu").get(0).innerHTML = `${value}%`;/*
var snode = document.createElement("style");
var height = $(".col-md-1").get(0).offsetHeight + $(".col-md-2").get(0).offsetHeight + 30;
console.log(height);
snode.innerHTML = `
    div#status>p {
        top: ${height}px;
    }
`;
document.head.appendChild(snode);*/
$("#text").height(document.body.clientHeight/*Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)*/);