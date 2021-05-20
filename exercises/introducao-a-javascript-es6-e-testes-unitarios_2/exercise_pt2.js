const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Ex 1:
const turnoMatutino = (value, key1, key2) => {
  value[key1] = key2;
}
turnoMatutino(lesson2, 'turno', 'matutino');

// const turnoMatutino = (value, key1, key2) => {
//   const addingProp = Object.assign(value, key1, key2);
//   return addingProp;
// }
// console.log(turnoMatutino({}, lesson1, lesson2));


// Ex 2:
const keyList = (obj) => {
  const arrOfObj = Object.keys(obj);
  for (let index in arrOfObj) {
    console.log(`${arrOfObj[index]}`);
  }
}
keyList(lesson1);


// Ex 3:
const objSize = (obj) => {
  const objLength = Object.keys(obj).length;
  return objLength;
}
console.log(objSize(lesson1));


// Ex 4:
const objValue = (obj) => {
  const onlyObj = Object.values(obj);
  return onlyObj;
}
console.log(objValue(lesson3));


// Ex 5:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});;
console.log(allLessons);