'use strict';

const bodyEl = document.querySelector('body');

const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');

bodyEl.addEventListener('click', onClickStartBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStartBtn(e) {
  console.log(e.target);
}
