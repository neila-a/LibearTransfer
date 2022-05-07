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
        <h2 mount="transtext" id="title"></h2>
        <textarea rows="1" id="text" /></textarea>
        <button type="submit" mount="send" id="send"></button>
    `);
    initmount();
    document.getElementById("send").onclick = function () {
        window.peerconn;
    };
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
        <h3 mount="yourid"></h3>
        <p>${window.id}<i class="fa" id="copyid">&#xf0c5;</i></p>
        <h3 mount="himid"></h3>
        <from>
            <input type="text" maxlength="9" required="true" id="himid" />
            <br />
            <br />
            <button type="submit" mount="openconn" id="connbtn"></button>
        </from>
    `);
    initmount();
    document.getElementById("connbtn").onclick = function () {
        window.peerconn.connect(document.getElementById("himid").value);
    };
    var cpel = document.getElementById("copyid");
    cpel.onclick = function () {
        this.style.cssText = "color: #1ba784;";
        this.innerHTML = "&#xf00c;";
        navigator.clipboard.writeText(window.id);
        setTimeout(function () {
            cpel.innerHTML = "&#xf0c5;";
            cpel.style.cssText = "color: #000000;";
        }, 750);
    };
};
const showabout = function () {
    new Popup(`
        <h2 mount="about"></h2>
        <img src="https://s1.ax1x.com/2022/04/28/LjF3MF.png" alt="Libear" style="margin-top: 0;" />
        <h3>LibearTransfer</h3>
        <div mount="aboutinfo"></div>
        <h3 mount="thank"></h3>
        <a href="https://fingerprintjs.com/">
            <svg>
                <g xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#fff" stroke-width="9" stroke-linejoin="round" paint-order="stroke" fill="#171a31" d="M89.897 47.34v-13h11.47v-5.6h-11.47v-8.67h13l.77-5.53h-21.58v32.8zm30.13-29.88a4.42 4.42 0 003.18-1.17 4.32 4.32 0 000-6 4.33 4.33 0 00-3.18-1.25 4.38 4.38 0 00-3.19 1.21 4.24 4.24 0 000 6 4.38 4.38 0 003.19 1.21zm10.94 29.88v-5.11h-6.43v-20h-14.41v5.11h6.9v14.89h-7.09v5.11zm14.55 0V29.78a10.25 10.25 0 012.21-2.15 3.72 3.72 0 012.19-.74 2 2 0 011.9.9 7.19 7.19 0 01.52 3.26v16.29h7.48V28.87a7.91 7.91 0 00-1.82-5.53 6.56 6.56 0 00-5.1-2 9.52 9.52 0 00-4.23.91 12.21 12.21 0 00-3.64 2.84l-.52-2.89h-6.48v25.14zm31.68 10.5c4.4 0 7.73-.72 10-2.19a7 7 0 003.4-6.09 6.24 6.24 0 00-1.19-3.74 7.71 7.71 0 00-3.38-2.65 12.65 12.65 0 00-5-.94h-4.16a4 4 0 01-2.21-.41 1.33 1.33 0 01-.55-1.11 1.52 1.52 0 01.23-.82 1.32 1.32 0 01.58-.61 13.77 13.77 0 002.94.29 13.42 13.42 0 005.58-1.08 8.87 8.87 0 003.74-3 7.53 7.53 0 001.33-4.33 6.11 6.11 0 00-1.2-3.88 9.58 9.58 0 00-3.67-2.6 20.36 20.36 0 007.24-1l-1.71-5.49a25.12 25.12 0 01-5.4 2.49 20.25 20.25 0 01-6.44.73 14.49 14.49 0 00-5.81 1.15 9.11 9.11 0 00-4 3.2 8.49 8.49 0 00-1.39 4.8 7.87 7.87 0 001 4.17 8.51 8.51 0 003.41 3 6.12 6.12 0 00-2.06 2.11 5.08 5.08 0 00-.73 2.67 4.21 4.21 0 001.94 3.57c1.28.94 3.23 1.4 5.82 1.4h4a4.52 4.52 0 012.73.69 2.13 2.13 0 01.91 1.82 2.36 2.36 0 01-1.24 2.13 9.71 9.71 0 01-4.58.76 14.86 14.86 0 01-3.6-.33 2.9 2.9 0 01-1.7-.99 3.26 3.26 0 01-.45-1.85h-6.55a8.31 8.31 0 001 4.45 6.92 6.92 0 003.74 2.71 21.89 21.89 0 007.35 1zm.39-23.05a3.61 3.61 0 01-2.8-1.13 5.28 5.28 0 010-6.25 3.65 3.65 0 012.83-1.14c2.56 0 3.83 1.37 3.83 4.13a4.72 4.72 0 01-1 3.28 3.59 3.59 0 01-2.83 1.11zm30.08 13.36a16.48 16.48 0 005.62-.93 13.51 13.51 0 004.41-2.54l-3-4.07a11.72 11.72 0 01-6.44 2.09q-5.35 0-6.07-5.73h16.29a22 22 0 00.15-2.7 15.5 15.5 0 00-1.45-6.93 10.29 10.29 0 00-4.1-4.45 13.37 13.37 0 00-12.84.23 11.38 11.38 0 00-4.21 4.84 15.79 15.79 0 00-1.44 6.83 15.44 15.44 0 001.49 7 10.82 10.82 0 004.43 4.68 14.17 14.17 0 007.15 1.69zm3.68-15.73h-9.32a8 8 0 011.48-4.56 4 4 0 013.26-1.49c2.93 0 4.43 2 4.49 6zm29.18 14.92v-5h-5v-7.2a13.54 13.54 0 012.5-4.8 6.38 6.38 0 013.69-2.27v4.64h4.74l1.37-10.51a11 11 0 00-4.16-.75 8.23 8.23 0 00-5.13 1.58 11.63 11.63 0 00-3.45 4.81l-1.32-5.64h-9v5h3.31v15.12h-3.31v5zm12.85 10.5l7.48-.8V45.56a7.63 7.63 0 006 2.61 8.06 8.06 0 005.17-1.75 10.94 10.94 0 003.34-4.78 19.54 19.54 0 001.15-6.94q0-6.39-2.22-9.87c-1.48-2.32-3.81-3.47-7-3.47a8.36 8.36 0 00-3.67.89 9.6 9.6 0 00-3.28 2.75l-.33-2.8h-6.63zm11.17-15.19a3.65 3.65 0 01-2-.54 5.74 5.74 0 01-1.68-1.69v-10.6c1.16-2 2.53-2.93 4.12-2.93a3 3 0 012.83 1.72c.64 1.15 1 3.22 1 6.18 0 2.76-.36 4.74-1.07 6a3.42 3.42 0 01-3.15 1.87zm33.67 4.69v-5h-5v-7.2a13.54 13.54 0 012.51-4.78 6.29 6.29 0 013.69-2.27v4.64h4.73l1.37-10.51a10.91 10.91 0 00-4.16-.75 8.15 8.15 0 00-5.11 1.58 11.54 11.54 0 00-3.45 4.81l-1.33-5.64h-9v5h3.31v15.1h-3.31v5zm23.69-29.88a4.4 4.4 0 003.17-1.17 4.32 4.32 0 000-6 4.31 4.31 0 00-3.17-1.21 4.38 4.38 0 00-3.19 1.21 4.19 4.19 0 000 6 4.38 4.38 0 003.19 1.2zm10.94 29.88v-5.11h-6.44v-20h-14.38v5.11h6.87v14.89h-7.1v5.11zm14.54 0V29.78a10.72 10.72 0 012.21-2.15 3.75 3.75 0 012.19-.74 2 2 0 011.91.9 7.19 7.19 0 01.52 3.26v16.29h7.47V28.87a7.91 7.91 0 00-1.82-5.53 6.54 6.54 0 00-5.09-2 9.46 9.46 0 00-4.23.91 12.37 12.37 0 00-3.58 2.82l-.52-2.89h-6.53v25.16zm35.75.81a15 15 0 008.25-2.28l-2.46-4.78a9 9 0 01-4.4 1.14 3.91 3.91 0 01-2.75-.81 3.54 3.54 0 01-.85-2.65v-11.4h7.34l.75-5.17h-8.09v-6.34l-7.48.89v5.45h-5.26v5.17h5.26v11.4a9.33 9.33 0 002.44 6.91c1.63 1.65 4 2.47 7.25 2.47zm22.89-.1q6.25 0 9.73-3.37c2.33-2.23 3.48-5.27 3.48-9.13V14.56h-17.8v5.68h10v15.32a6.86 6.86 0 01-1.63 5 5.64 5.64 0 01-4.23 1.67 11.14 11.14 0 01-3.36-.46 13.66 13.66 0 01-3.19-1.58l-2.92 4.78a18.46 18.46 0 004.55 2.33 17.59 17.59 0 005.33.75zm30.64.1a17.85 17.85 0 007.14-1.31 10.54 10.54 0 004.62-3.67 9.52 9.52 0 001.6-5.45 8.86 8.86 0 00-2.44-6.64 18 18 0 00-7.45-3.9 40.81 40.81 0 01-4.11-1.47 5.28 5.28 0 01-2-1.33 2.67 2.67 0 01-.61-1.75 2.71 2.71 0 011.31-2.4 6.64 6.64 0 013.57-.82 11.7 11.7 0 017.53 2.74l3.65-4.21q-4.5-4.26-11.74-4.26a16.55 16.55 0 00-6.27 1.14 10.22 10.22 0 00-4.44 3.32 8.32 8.32 0 00-1.63 5.11 8.16 8.16 0 002.42 6.1q2.42 2.37 8.19 4.11a14.76 14.76 0 014.66 2.1 3.72 3.72 0 01-.23 5.77 6.65 6.65 0 01-4 1.07 13 13 0 01-8.86-3.32l-3.93 4.36q4.83 4.74 13 4.74zm0 0" />
                    <path fill="#f24405" d="M49.627 7.8a1.62 1.62 0 01-.78-.2 41.29 41.29 0 00-37.29 0 1.75 1.75 0 01-2.28-.63 1.54 1.54 0 01.66-2.13 44.88 44.88 0 0140.45-.05 1.51 1.51 0 01.7 2.13 1.68 1.68 0 01-1.46.88zM1.707 24.37a1.86 1.86 0 01-1-.29 1.52 1.52 0 01-.4-2.2 34.23 34.23 0 0112.58-10.32 40.78 40.78 0 0134.52 0 34.28 34.28 0 0112.56 10.22 1.53 1.53 0 01-.41 2.21 1.74 1.74 0 01-2.34-.43 31.06 31.06 0 00-11.35-9.27 37.2 37.2 0 00-31.47 0 31.26 31.26 0 00-11.37 9.41 1.48 1.48 0 01-1.31.67zm20.93 38.09a1.65 1.65 0 01-1.18-.48 31.66 31.66 0 01-6.72-8.33 26.64 26.64 0 01-3.52-13.69c0-9.37 8.5-17 19-17s18.9 7.6 18.9 17a1.68 1.68 0 01-3.36 0c0-7.65-7-13.87-15.58-13.87s-15.61 6.22-15.61 13.87a23.57 23.57 0 003.11 12.14 29.64 29.64 0 006.2 7.63 1.56 1.56 0 010 2.25 2 2 0 01-1.24.48zm24-5.85a18.86 18.86 0 01-10.38-2.8 16.55 16.55 0 01-8-13.85 1.67 1.67 0 013.34 0 13.39 13.39 0 006.53 11.23 15.37 15.37 0 008.51 2.24 23.94 23.94 0 003.48-.31 1.67 1.67 0 012 1.29 1.59 1.59 0 01-1.38 1.83 25 25 0 01-4 .37zm-6.72 6.51a1.5 1.5 0 01-.44-.07 26.52 26.52 0 01-12.45-6.61 22.44 22.44 0 01-7.28-16.48c0-5.11 4.63-9.29 10.32-9.29s10.31 4.18 10.31 9.29c0 3.36 3.11 6.12 7 6.12s7-2.76 7-6.12c0-11.91-10.89-21.56-24.27-21.56-9.51 0-18.22 5-22.14 12.72a19.37 19.37 0 00-2 8.84 29.57 29.57 0 002.25 11.39 1.53 1.53 0 01-1 2 1.7 1.7 0 01-2.19-.9 33.61 33.61 0 01-2.41-12.49 22.47 22.47 0 012.27-10.23c4.45-8.8 14.33-14.51 25.14-14.51 15.23 0 27.61 11.07 27.61 24.71 0 5.11-4.61 9.27-10.31 9.27s-10.3-4.16-10.3-9.27c0-3.38-3.12-6.12-7-6.12s-7 2.74-7 6.12a19.27 19.27 0 006.34 14.23 23.11 23.11 0 0010.94 5.83 1.57 1.57 0 011.18 1.92 1.64 1.64 0 01-1.57 1.21zm0 0"/>
                </g>
            </svg>
        </a>
        <a href="https://peerjs.com">
            <div class="peerjs">
                <h3>PEER </h3>
                <h3 style="color: #e96151;">JS</h3>
            </div>
        </a>
        <a href="https://fontawesome.com">
            <p id="fa">
                <i class="fa">&#xf2b4;</i>
                Font AweSome
            </p>
        </a>
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