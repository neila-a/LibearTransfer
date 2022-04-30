class Popup {
    constructor(text) {
        var random = `popup-box-${Math.random().toString().replace(/\./g, "")}`;
        var box = document.createElement("div");
        box.id = random;
        box.style.cssText = "opacity: 1; transform: scale(1);";
        box.classList.add("popup");
        box.innerHTML = `
            <span class="close-btn" tabindex="0" role="button" aria-label="关闭" onclick="this.parentElement.outerHTML = '';"></span>
            <div style="text-align: center; overflow-x: hidden; margin: 2%;height: 100%;">
                ${text}
            </div>
        `;
        document.body.appendChild(box);
        this.htmlobject = document.getElementById(random);
    }
}