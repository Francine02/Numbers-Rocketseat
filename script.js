const SUCCESS_ICON = './assets/success.png';
const WARNING_ICON = './assets/warning.png';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const quantityOfNumbers = Number(document.getElementById('quantity-numbers').value);
  const minNumber = Number(document.getElementById('min-number').value);
  const maxNumber = Number(document.getElementById('max-number').value);

  const shouldNotRepeat = document.getElementById('not-repeat').checked;

  console.log(minNumber, maxNumber);

  generateRandomNumbers(quantityOfNumbers, minNumber, maxNumber, shouldNotRepeat);
});

function generateRandomNumbers(quantity, minNumber, maxNumber, shouldNotRepeat) {
  if (!isMaxGreaterThanMin(minNumber, maxNumber)) return;

  const result = shouldNotRepeat
    ? generateUniqueRandomNumbers(quantity, minNumber, maxNumber)
    : generateRandomNumbersAllowingRepetition(quantity, minNumber, maxNumber);

  console.log(result);

  if (result) showToastMessage('Número sorteado com sucesso!', SUCCESS_ICON);
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

      if (!isNumberAlreadyDrawn(result, randomNumber)) {
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

function isMaxGreaterThanMin(min, max) {
  if (max < min || max === min) {
    showToastMessage('O valor máximo deve ser maior que o valor mínimo.', WARNING_ICON);
    return false;
  }
  return true;
}

function isQuantityGreaterThanInterval(quantity, min, max) {
  if (quantity > max - min + 1) {
    showToastMessage(
      `Você pediu ${quantity} números, mas existem apenas ${max - min + 1} disponíveis nesse intervalo.`,
      WARNING_ICON
    );
    return true;
  }
  return false;
}

function isNumberAlreadyDrawn(generatedNumbers, number) {
  return generatedNumbers.includes(number);
}

function showToastMessage(text, icon) {
  Toastify({
    text: text,
    duration: 5000,
    gravity: 'top',
    position: 'right',
    close: true,
    avatar: icon,
    style: {
      background: 'var(--background-tertiary)',
      borderRadius: '10px',
      alignItems: 'center',
      display: 'flex',
      gap: '5px',
      maxWidth: '50%',
      minHeight: '4rem',
    },
    ariaLive: 'polite',
    stopOnFocus: true,
    onClick: function () {},
  }).showToast();
}
