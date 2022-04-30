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