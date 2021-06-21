import React from 'react';
import './App.css';
import Task from './components/Task';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
  );
}

export default App;
