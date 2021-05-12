const btn = document.querySelector('.send');
const clearAll = document.querySelector('#clear');

const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D MMM YYYY',
  onSelect: function() {
      console.log(this.getMoment().format('Do MMMM YYYY'));
  }    
});



clearAll.addEventListener('click', (e) => {
  const inputVal = document.querySelectorAll('input');
  const txtEl = document.querySelector('textarea');
  for(let index = 0; index < inputVal.length; index += 1) {
    inputVal[index].value = '';
    txtEl.value = '';
  }

  e.preventDefault();
})

