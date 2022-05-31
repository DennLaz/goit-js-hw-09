import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnEl = document.querySelector('button');
const selectorEl = document.querySelector('.timer');
let DEDLINE_TIMER_TIME = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      alert('"Please choose a date in the future"');
      btnEl.setAttribute('disabled', true);
    } else {
      btnEl.removeAttribute('disabled');
      DEDLINE_TIMER_TIME = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

btnEl.addEventListener('click', onClickStartBtn);

function onClickStartBtn() {
  start(selectorEl, DEDLINE_TIMER_TIME);
}

let intervalId = null;

function start(rootSelector, deadline) {
  intervalId = setInterval(() => {
    const ms = deadline - Date.now();

    if (ms <= 0) {
      stop(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(ms);

    rootSelector.querySelector('span[data-days]').textContent =
      addLeadingZero(days);
    rootSelector.querySelector('span[data-hours]').textContent =
      addLeadingZero(hours);
    rootSelector.querySelector('span[data-minutes]').textContent =
      addLeadingZero(minutes);
    rootSelector.querySelector('span[data-seconds]').textContent =
      addLeadingZero(seconds);
  });
}

function stop() {
  clearInterval(intervalId);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
