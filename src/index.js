// import _ from 'lodash';
// import './style.css';

import { ToDoList } from '../modules/ToDoList.js';

const toDoAdd = document.querySelector('#add');

const myToDoList = new ToDoList();

toDoAdd.addEventListener('change', () => {
  myToDoList.addTask();
  myToDoList.saveDataToLocalStorage();
  myToDoList.showTasks();
});

window.onload = () => {
  myToDoList.loadDataFromLocalStorage();
  myToDoList.showTasks();
};
