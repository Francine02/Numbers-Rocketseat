const formSection = document.getElementById('content-form');
const resultSection = document.getElementById('content-result');

const resultCount = document.getElementById('result-count');
const generatedNumbersSection = document.getElementById('results');
const againButton = document.getElementById('drawn-again');

export function renderResult(result, count) {
  formSection.classList.add('hidden');
  resultSection.classList.remove('hidden');

  changeResultCount(count);

  generatedNumbersSection.innerHTML = '';
  againButton.classList.add('hidden');

  const delay = 4200;

  result.forEach((number, index) => {
    const time = index === 0 ? 0 : delay * index;

    setTimeout(() => {
      generatedNumbersSection.insertAdjacentHTML('beforeend', createCard(number));
    }, time);

    setTimeout(() => {
      if (index === result.length - 1) {
        againButton.classList.remove('hidden');
      }
    }, time + 3000);
  });
}

export function renderForm() {
  formSection.classList.remove('hidden');
  resultSection.classList.add('hidden');
  againButton.classList.add('hidden');
}

function changeResultCount(count) {
  return (resultCount.innerText = `${count}º resultado`);
}

function createCard(number) {
  return `
    <li class="card">
        <span class="number">${number}</span>
    </li>
  `;
}
