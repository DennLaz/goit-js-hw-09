'use strict';

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

bodyEl.addEventListener('click', onChangeBgColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBgColorBody(e) {
  const { target, currentTarget } = e;
  if (target.type !== 'button') {
    return;
  }

  if (target === startBtn) {
    target.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
    timerId = setInterval(
      () => (currentTarget.style.backgroundColor = getRandomHexColor()),
      1000
    );
  } else {
    target.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
    clearInterval(timerId);
  }
}
