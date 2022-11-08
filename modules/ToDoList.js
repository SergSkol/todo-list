export class ToDoList {
  constructor() {
    this.arr = [];
    this.storageKey = 'todolist';
  }

  addTask() {
    const toDoAdd = document.querySelector('#add');
    const newItem = {
      index: Date.now(),
      description: toDoAdd.value,
      completed: false,
    };

    this.arr.push(newItem);
  }

  removeTask(index) {
    this.arr = this.arr.filter((task) => task.index !== index);
    const task = document.getElementById(index);
    task.remove();
  }

  saveDataToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.arr));
  }

  loadDataFromLocalStorage() {
    this.arr = JSON.parse(localStorage.getItem(this.storageKey));
    if (this.arr == null) {
      this.arr = [];
    }
  }

  showTasks() {
    function addElement(elementType, parent, className) {
      const element = document.createElement(elementType);
      element.classList.add(className);
      parent.appendChild(element);
      return element;
    }

    const todoList = document.querySelector('.todo-list');
    this.arr.forEach((task) => {
      const taskItem = addElement('div', todoList, 'task-item');
      taskItem.setAttribute('id', task.index);
      const taskDescription = addElement('div', taskItem, 'task-description');
      taskDescription.innerHTML = task.description;

      const taskRemoveButton = addElement('button', taskItem, 'task-remove-button',);
      taskRemoveButton.innerHTML = 'Remove';

      taskRemoveButton.addEventListener('click', () => {
        this.removeTask(task.index);
        this.saveDataToLocalStorage();
      });
    });
  }
}
