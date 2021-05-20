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

const turnoMatutino = (value, key1, key2) => {
  const addingProp = Object.assign(value, key1, key2);
  return addingProp;
}
console.log(turnoMatutino({}, lesson1, lesson2))
