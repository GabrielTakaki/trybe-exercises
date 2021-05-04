function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.


// EXERCICIO 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index +=1) {
    let monthDays = dezDaysList[index];
    let monthDaysLi = document.createElement('li');
    monthDaysLi.className = 'day';
    monthDaysLi.innerHTML = monthDays;
    days.appendChild(monthDaysLi);
    if (monthDays === 24 || monthDays === 31) {
        monthDaysLi.className = 'day holiday';
    } else if (monthDays === 4 || monthDays === 11 || monthDays === 18) {
        monthDaysLi.className = 'day friday';
    } else if (monthDays === 25) {
        monthDaysLi.className = 'day holiday friday';
    }
}

const btnContainer = document.querySelector('.buttons-container');


// EXERCICIO 2

function holidayDays() {
    const holidayBtn = document.createElement('button');
    holidayBtn.innerHTML = 'Feriados'
    holidayBtn.id = 'btn-holiday';
    btnContainer.appendChild(holidayBtn);
}

holidayDays()


// EXERCICIO 3

const feriadoBtn = document.getElementById('btn-holiday');
const daysHoli = document.querySelectorAll('.holiday');
const primary = 'purple';
const original = 'rgb(238,238,238)';

feriadoBtn.addEventListener('click', holidayColor);

function holidayColor() {
    for(let index = 0; index < daysHoli.length; index +=1) {
        if(daysHoli[index].style.backgroundColor === primary) {
            daysHoli[index].style.backgroundColor = original;
        } else {
            daysHoli[index].style.backgroundColor = primary;
        }
    }
}


// EXERCICIO 4

const fridayBtn = document.createElement('button');
fridayBtn.id = 'btn-friday';
fridayBtn.innerText = 'SEXTOU!'
btnContainer.appendChild(fridayBtn);


// EXERCICIO 5

const btnFriday = document.querySelector('#btn-friday')
const fridays = document.querySelectorAll('.friday');
const msg = 'SEXTOU!!'
const fridaysArray = [4, 11, 18, 25];

btnFriday.addEventListener('click', itsFriday);

function itsFriday() {
    for(let index = 0; index < fridays.length; index +=1) {
        if(fridays[index].innerHTML !== msg) {
            fridays[index].innerHTML = msg;
        } else {
            fridays[index].innerHTML = fridaysArray[index];
        }       
    }
}


// EXERCICIO 6

const allDays = document.querySelector('#days');

allDays.addEventListener('mouseover', zoomIn);

function zoomIn(e) {
    e.target.style.fontSize = '30px';
}

days.addEventListener('mouseout', zoomOut)

function zoomOut(e) {
    e.target.style.fontSize = '20px';
};


// EXERCICIO 7

function createTask() {
    const taskDiv = document.querySelector('.my-tasks');
    const myTask = document.createElement('span');
    myTask.innerText = 'Varrer a casa';
    taskDiv.appendChild(myTask);


    // EXERCICIO 8
    function taskSubtitle(cor) {
        const createDiv = document.createElement('div');
        createDiv.className = 'task';
        taskDiv.appendChild(createDiv);
        createDiv.style.backgroundColor = cor;
    }
    taskSubtitle('green');
}    
createTask();


// EXERCICIO 9

const divTaskSel = document.querySelector('.task');
divTaskSel.addEventListener('click', taskSelected);

function taskSelected() {
    if(divTaskSel.className === 'task selected') {
        divTaskSel.className = 'task'
    } else {
        divTaskSel.className = 'task selected'
    }
}


// EXERCICIO 10

const mondayTask = document.querySelector('.day').nextElementSibling.nextElementSibling;

mondayTask.addEventListener('click', taskDay);

function taskDay() {
    if(mondayTask.style.color === 'green') {
        mondayTask.style.color = 'rgb(119,119,119)';
    } else {
        mondayTask.style.color = 'green';
    }
}