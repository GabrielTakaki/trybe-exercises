const btnEl = document.querySelector('.btn');
const spanEl = document.querySelector('.clickCounter');
let counter = 0;

btnEl.addEventListener('click', () => {
  counter += 1;
  spanEl.textContent = counter;
})