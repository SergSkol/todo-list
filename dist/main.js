"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./modules/ToDoList.js":
/*!*****************************!*\
  !*** ./modules/ToDoList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoList": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList {
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

  saveTasks() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.arr));
  }

  loadTasks() {
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
        this.saveTasks();
      });
    });
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ToDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ToDoList.js */ "./modules/ToDoList.js");
// import _ from 'lodash';
// import './style.css';



const toDoAdd = document.querySelector('#add');

const myToDoList = new _modules_ToDoList_js__WEBPACK_IMPORTED_MODULE_0__.ToDoList();

toDoAdd.addEventListener('change', () => {
  myToDoList.addTask();
  myToDoList.saveTasks();
  myToDoList.showTasks();
});

window.onload = () => {
  myToDoList.loadTasks();
  myToDoList.showTasks();
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ2tEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwREFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcnIgPSBbXTtcclxuICAgIHRoaXMuc3RvcmFnZUtleSA9ICd0b2RvbGlzdCc7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKCkge1xyXG4gICAgY29uc3QgdG9Eb0FkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgIGluZGV4OiBEYXRlLm5vdygpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdG9Eb0FkZC52YWx1ZSxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hcnIucHVzaChuZXdJdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhc2soaW5kZXgpIHtcclxuICAgIHRoaXMuYXJyID0gdGhpcy5hcnIuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpbmRleCk7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5kZXgpO1xyXG4gICAgdGFzay5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHNhdmVUYXNrcygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5hcnIpKTtcclxuICB9XHJcblxyXG4gIGxvYWRUYXNrcygpIHtcclxuICAgIHRoaXMuYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpKTtcclxuICAgIGlmICh0aGlzLmFyciA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuYXJyID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93VGFza3MoKSB7XHJcbiAgICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZW1lbnRUeXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xyXG4gICAgdGhpcy5hcnIuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGFkZEVsZW1lbnQoJ2RpdicsIHRvZG9MaXN0LCAndGFzay1pdGVtJyk7XHJcbiAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrLmluZGV4KTtcclxuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gYWRkRWxlbWVudCgnZGl2JywgdGFza0l0ZW0sICd0YXNrLWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgY29uc3QgdGFza1JlbW92ZUJ1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsIHRhc2tJdGVtLCAndGFzay1yZW1vdmUtYnV0dG9uJywpO1xyXG4gICAgICB0YXNrUmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9ICdSZW1vdmUnO1xyXG5cclxuICAgICAgdGFza1JlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVRhc2sodGFzay5pbmRleCk7XHJcbiAgICAgICAgdGhpcy5zYXZlVGFza3MoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gJy4uL21vZHVsZXMvVG9Eb0xpc3QuanMnO1xyXG5cclxuY29uc3QgdG9Eb0FkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuXHJcbmNvbnN0IG15VG9Eb0xpc3QgPSBuZXcgVG9Eb0xpc3QoKTtcclxuXHJcbnRvRG9BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gIG15VG9Eb0xpc3QuYWRkVGFzaygpO1xyXG4gIG15VG9Eb0xpc3Quc2F2ZVRhc2tzKCk7XHJcbiAgbXlUb0RvTGlzdC5zaG93VGFza3MoKTtcclxufSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIG15VG9Eb0xpc3QubG9hZFRhc2tzKCk7XHJcbiAgbXlUb0RvTGlzdC5zaG93VGFza3MoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9