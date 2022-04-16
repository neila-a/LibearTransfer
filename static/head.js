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