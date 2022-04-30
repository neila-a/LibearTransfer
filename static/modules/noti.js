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