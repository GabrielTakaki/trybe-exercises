const btn = document.querySelector('.send');
const clearAll = document.querySelector('.clearAll');

// btn.addEventListener('click', (e) => {

//   preventDefault();
// })

clearAll.addEventListener('click', (e) => {
  const inputVal = document.querySelectorAll('input');
  const txtEl = document.querySelector('textarea');
  for(let index = 0; index < inputVal.length; index += 1) {
    inputVal[index].value = '';
    txtEl.value = '';
  }
  e.preventDefault();
})