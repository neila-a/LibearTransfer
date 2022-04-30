const showlanguage = function () {
    const langlist = eval(localStorage.langlist);
    var selectinner = "";
    langlist.forEach(
        function (item) {
            var toString = `[\\'${item.toString().replace(/,/g, "\\',\\'").replace(/"/g, "\\'")}\\']`;
            selectinner = selectinner + `
                <div class="option" onclick="
                    localStorage.setItem('language', '${toString}');
                    initmount();
                    document.getElementsByTagName('html')[0].setAttribute('lang', eval(localStorage.language)[0]);
                ">
                    <div class="radio">
                        <input type="radio" value="${item[0]}" name="language" id="${item[0]}" checked="true" />
                        <label for="${item[0]}">
                            ${item[1]}
                        </label>
                    </div>
                </div>
            `;
        }
    );
    new Popup(`
        <h2 mount="selectlang"></h2>
        <from action="set" method="get">
            <div id="select">
                ${selectinner}
            </div>
            <br>
            <br>
            <p mount="or"></p>
            <input id="forupload" type="file" style="display: none;" onchange="upload(event);" />
            <button type="submit" onclick="document.querySelector('#foruploadlang').click();" mount="uploadnewlang"></button>
            <br>
            <br>
            <button type="submit" onclick="localStorage.setItem('langlist',undefined);location.reload();" mount="cleanalllang"></button>
        </from>
    `);
    initmount();
    mount("style").as(`
        img {
            margin-top: ${screen.availHeight / 2 - 200}px;
        }
    `);
};
const showfile = function () {
    var popupbox = new Popup(`
        <div id="title">
            <h2 mount="transfile"></h2>
        </div>
        <div id="dragaera" draggable="true" mount="drag"></div>
        <br>
        <p mount="or"></p>
        <button id="send" onclick="document.querySelector('#forupload').click();" mount="send"></button>
    `);
    initmount();
    document.getElementById("dragaera").style.height = `${390 / 2 - document.getElementById("title").clientHeight}px`;
};
const showtext = function () {
    new Popup(`
        <h2 mount="transtext"></h2>
    `);
    initmount();
};
const showhelp = function () {
    new Popup(`
        <h2 mount="help"></h2>
    `);
    initmount();
};
const showconn = function () {
    new Popup(`
        <h2 mount="connect"></h2>
    `);
    initmount();
};
const showabout = function () {
    new Popup(`
        <h2 mount="about"></h2>
    `);
    initmount();
};
const showtheme = function () {
    window.paletteonchange = function (event) {
        const { value } = document.querySelector("input[type=\"color\"");
        document.body.style.setProperty("--theme-color", value);
        localStorage.setItem("theme_color", value);
    };
    new Popup(`
    	<h2 mount="theme"></h2>
    	<h3 mount="palette"></h3>
    	<input type="color" value="${localStorage.theme_color}" onchange="paletteonchange(event);"/>
    `);
    initmount();
};