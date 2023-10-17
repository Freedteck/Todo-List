import './style.css'
import addToMain from './addToMain';
import addToSide from './addToSide';
import { createTodo, getTodo } from "./todo";

// Dom Variables
const addTodo = document.querySelector('.add-todo');
const mainContainer = document.querySelector('.todo-container');
const sideBarTodo = document.getElementById('todo-list')

// Logic to update todo
const updateTodo = () => {
    mainContainer.innerHTML = ''
    sideBarTodo.innerHTML = ''
    getTodo().forEach((todo, index) => {
        addToMain(todo, mainContainer, index, updateTodo)
        addToSide(todo, sideBarTodo, index, updateTodo)
    })
}

// EventListeners
addTodo.addEventListener('click', () => {
    const title = prompt('Enter title', 'Testing')
    const desc = prompt('Enter title', 'Mode')
    const dueDate = prompt('Enter title', '2')
    const priority = prompt('Enter title', '1')
    let isComplete = false

    createTodo(title, desc, dueDate, priority, isComplete);
    updateTodo()
})