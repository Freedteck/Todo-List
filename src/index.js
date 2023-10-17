import './style.css'
import addToMain from './addToMain';
import addToSide from './addToSide';
import { createTodo, getTodo } from "./todo";
import { getProject, addProject } from './project';
import addToProject from './addToProject';

// Dom Variables
const addTodo = document.querySelector('.add-todo');
const mainContainer = document.querySelector('.todo-container');
const sideBarTodo = document.getElementById('todo-list')
const projectSide = document.getElementById('project-list')

// Logic to update todo
const updateTodo = () => {
    mainContainer.innerHTML = ''
    sideBarTodo.innerHTML = ''
    getTodo().forEach((todo, index) => {
        addToMain(todo, mainContainer, index, updateTodo)
        addToSide(todo, sideBarTodo, index, updateTodo)
        updateProject()
    })
}

const updateProject = () => {
    projectSide.innerHTML = ''
    getProject().forEach((project, index) => {
        addToProject(project, projectSide, index, updateTodo)
    })
}

updateProject()

// EventListeners
addTodo.addEventListener('click', () => {
    const title = prompt('Enter title', 'Testing')
    const desc = prompt('Enter description', 'Mode')
    const dueDate = prompt('Enter date', '2')
    const priority = prompt('Enter priority', '1')
    const projectCat = prompt('Enter cate', 'Coding')
    let isComplete = false

    if (getProject().includes(projectCat)) {
        createTodo(title, desc, dueDate, priority, projectCat, isComplete);
        updateTodo()
        // updateProject()
    } else {
        alert('Pls create a project')
        const name = prompt('Enter Project name ')
        if (!getProject().includes(name)) {
            addProject(name)
            createTodo(title, desc, dueDate, priority, name, isComplete);
            updateTodo()
            updateProject()
        }

    }

})