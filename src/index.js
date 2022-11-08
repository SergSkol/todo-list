// uncomment before deploy:

// import _ from 'lodash';
// import './style.css';

import { ToDoList } from './modules/ToDoList.js';

const toDoAdd = document.querySelector('#add');

const myToDoList = new ToDoList();

toDoAdd.addEventListener('change', () => {
  myToDoList.addTask();
  myToDoList.saveTasks();
});

window.onload = () => {
  myToDoList.loadTasks();
  myToDoList.showTasks();
};
