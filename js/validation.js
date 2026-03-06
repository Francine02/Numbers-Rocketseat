import { showToastMessage } from './toast.js';

const WARNING_ICON = '../assets/warning.png';

export function isMaxGreaterThanMin(min, max) {
  if (max < min || max === min) {
    showToastMessage('O valor máximo deve ser maior que o valor mínimo.', WARNING_ICON);
    return false;
  }
  return true;
}

export function isQuantityGreaterThanInterval(quantity, min, max) {
  if (quantity > max - min + 1) {
    showToastMessage(
      `Você pediu ${quantity} números, mas existem apenas ${max - min + 1} disponíveis nesse intervalo.`,
      WARNING_ICON
    );
    return true;
  }
  return false;
}

export function isNumberAlreadydraw(generatedNumbers, number) {
  return generatedNumbers.includes(number);
}
