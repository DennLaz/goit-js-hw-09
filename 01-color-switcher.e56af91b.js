"use strict";var bodyEl=document.querySelector("body"),startBtn=document.querySelector("button[data-start]"),stopBtn=document.querySelector("button[data-stop]"),timerId=null;function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function onChangeBgColorBody(t){var e=t.target,r=t.currentTarget;"button"===e.type&&(e===startBtn?(e.setAttribute("disabled",!0),stopBtn.removeAttribute("disabled"),timerId=setInterval((function(){return r.style.backgroundColor=getRandomHexColor()}),1e3)):(e.setAttribute("disabled",!0),startBtn.removeAttribute("disabled"),clearInterval(timerId)))}bodyEl.addEventListener("click",onChangeBgColorBody);
//# sourceMappingURL=01-color-switcher.e56af91b.js.map
