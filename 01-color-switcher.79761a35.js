"use strict";var bodyEl=document.querySelector("body"),startBtn=document.querySelector("button[data-start]"),stopBtn=document.querySelector("button[data-stop]");function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function onClickStartBtn(t){console.log(t.target)}bodyEl.addEventListener("click",onClickStartBtn);
//# sourceMappingURL=01-color-switcher.79761a35.js.map
