import { showToastMessage } from './toast.js';
import {
  isMaxGreaterThanMin,
  isNumberAlreadydraw,
  isQuantityGreaterThanInterval,
} from './validation.js';

const SUCCESS_ICON = '../assets/success.png';

export function generateRandomNumbers(quantity, minNumber, maxNumber, shouldNotRepeat) {
  if (!isMaxGreaterThanMin(minNumber, maxNumber)) return;

  const result = shouldNotRepeat
    ? generateUniqueRandomNumbers(quantity, minNumber, maxNumber)
    : generateRandomNumbersAllowingRepetition(quantity, minNumber, maxNumber);

  if (result) showToastMessage('Número sorteado com sucesso!', SUCCESS_ICON);

  return result;
}

function generateRandomNumbersAllowingRepetition(quantity, minNumber, maxNumber) {
  const result = [];

  for (let i = 0; i < quantity; i++) {
    result.push(generateRandomNumber(minNumber, maxNumber));
  }

  return result;
}

function generateUniqueRandomNumbers(quantity, minNumber, maxNumber) {
  const result = [];

  if (!isQuantityGreaterThanInterval(quantity, minNumber, maxNumber)) {
    while (result.length < quantity) {
      const randomNumber = generateRandomNumber(minNumber, maxNumber);

      if (!isNumberAlreadydraw(result, randomNumber)) {
        result.push(randomNumber);
      }
    }

    return result;
  }

  return false;
}

function generateRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
