const uploadlang = function (event) {
    const file = event.target.files[0];
    var outputtext = `[FileReader] 已读取'${file.name}'，最后修改时间是${file.lastModifiedDate}，类别是${file.type}，大小是${file.size}字节。`;
    console.log(outputtext);
    const reader = new FileReader();
    reader.onloadend = function (arg) {
        const result = JSON.parse(reader.result);
        localStorage.setItem("langlist", `
            ${localStorage.langlist.substring(0, localStorage.langlist.length - 1)}
            ,[
                "${result.main}"
            ]]
        `);
        location.reload();
    };
    return reader.readAsText(file);
};