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