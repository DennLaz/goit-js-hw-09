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
    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay,
        });
      } else {
        reject({
          position,
          delay,
        });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', onFormSubmite);

function onFormSubmite(e) {
  e.preventDefault();

  inputStepValue = inputStep.valueAsNumber;
  inputAmountValue = inputAmount.valueAsNumber;
  inputDelayValue = inputDelay.valueAsNumber;

  for (let i = 0; i < inputAmountValue; i += 1) {
    createPromise(i + 1, inputDelayValue + i * inputStepValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
