import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const inputDelay = formEl.querySelector('[name="delay"]');
const inputStep = formEl.querySelector('[name="step"]');
const inputAmount = formEl.querySelector('[name="amount"]');

let inputAmountValue;
let inputDelayValue;
let inputStepValue;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({
        position: inputAmountValue,
        delay: inputDelayValue,
      });
    } else {
      reject({
        position: inputAmountValue,
        delay: inputDelayValue,
      });
    }
  });
}

formEl.addEventListener('submit', onFormSubmite);

function onFormSubmite(e) {
  e.preventDefault();

  inputStepValue = inputStep.valueAsNumber;
  inputAmountValue = inputAmount.valueAsNumber;
  inputDelayValue = inputDelay.valueAsNumber;

  for (let i = 0; i < inputAmountValue; i += 1) {
    setTimeout(() => {
      createPromise(inputAmountValue, inputDelayValue)
        .then(({ position, delay }) => {
          position = i + 1;
          delay = (inputDelayValue += inputStepValue) - inputStepValue;
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          position = i + 1;
          delay = (inputDelayValue += inputStepValue) - inputStepValue;
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, inputDelayValue);
  }
}
