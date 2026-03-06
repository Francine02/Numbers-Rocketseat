import { generateRandomNumbers } from './random.js';
import { renderForm, renderResult } from './render.js';

const form = document.querySelector('form');
const logo = document.getElementById('logo');
const againButton = document.getElementById('drawn-again');

const quantityOfNumbers = document.getElementById('quantity-numbers');
const minNumber = document.getElementById('min-number');
const maxNumber = document.getElementById('max-number');

const shouldNotRepeat = document.getElementById('not-repeat');

let resultCount = 1;

let maxValue;
let minValue;
let quantityValue;

let shouldNotRepeatValue;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  maxValue = Number(maxNumber.value);
  minValue = Number(minNumber.value);
  quantityValue = Number(quantityOfNumbers.value);

  shouldNotRepeatValue = shouldNotRepeat.checked;

  generateResult(quantityValue, minValue, maxValue, shouldNotRepeatValue);

  quantityOfNumbers.value = '';
  minNumber.value = '';
  maxNumber.value = '';

  shouldNotRepeat.checked = false;
});

logo.addEventListener('click', () => {
  resultCount = 1;
  renderForm();
});

againButton.addEventListener('click', () => {
  resultCount++;

  generateResult(quantityValue, minValue, maxValue, shouldNotRepeatValue);
});

function generateResult(quantity, min, max, shouldNotRepeat) {
  const result = generateRandomNumbers(quantity, min, max, shouldNotRepeat);

  if (result) renderResult(result, resultCount);
}
