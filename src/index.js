// import _ from 'lodash';
import './style.css';
import ToDoList from './modules/ToDoList.js';

const toDoAdd = document.querySelector('#add');

const myToDoList = new ToDoList();

toDoAdd.addEventListener('change', () => {
  // myToDoList.addTask();
  // myToDoList.saveTasks();
});

window.onload = () => {
  // myToDoList.loadTasks();
  myToDoList.showTasks();
};

myToDoList.arr = [
  {
    index: 1,
    description: 'Morning session',
    completed: false,
  },
  {
    index: 2,
    description: 'Coding with partners',
    completed: false,
  },
  {
    index: 3,
    description: 'Stand up session',
    completed: false,
  },
];