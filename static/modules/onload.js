window.mounts = {};
initmount();
document.body.style.setProperty("--theme-color", localStorage.theme_color);
document.getElementById("menu-icon").onclick = function () {
    if (document.querySelector('#menu').style.display == 'block') {
        document.querySelector('#menu').style.display = 'none';
        this.className = 'menu-icon';
        this.innerHTML = '<div></div><div></div><div></div>';
    } else {
        document.querySelector('#menu').style.display = 'block';
        this.innerHTML = '';
        this.className = 'close-btn-formenu';
    }
};
document.getElementById("menu").onclick = function () {
    this.style.display = 'none';
    document.querySelector('#menu-icon').className = 'menu-icon';
    document.querySelector('#menu-icon').innerHTML = '<div></div><div></div><div></div>';
};
const { log } = console;
document.getElementById("app").onclick = () => {
    var that = document.querySelector('.close-btn-formenu');
    if (that != null) {
        document.querySelector('#menu').style.display = 'none';
        that.className = 'menu-icon';
        that.innerHTML = '<div></div><div></div><div></div>';
    }
};
var createconnobj = document.getElementById("createconn");
createconnobj.onclick = () => {
    createconnobj.style.display = "none";
    showconn();
};
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