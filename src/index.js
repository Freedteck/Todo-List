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
const dialog = document.getElementById('todo-dialog')
const submit = document.getElementById('submit')

const userTitle = document.getElementById('title')
const userDesc = document.getElementById('description')
const userPrior = document.getElementById('priority')
const userProject = document.getElementById('project')
const userDate = document.getElementById('date')


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
let choosenProject = ''
const defaultProject = userProject.value
addTodo.addEventListener('click', () => {
    dialog.show()
    userProject.value = defaultProject
    choosenProject = defaultProject
})

userProject.addEventListener('change', () => {
    choosenProject = userProject.selectedOptions[0].text
})
submit.addEventListener('click', (e) => {
    e.preventDefault()

    const title = userTitle.value
    const desc = userDesc.value
    let projectCat = choosenProject
    const dueDate = date.value
    let isComplete = false
    createTodo(title, desc, dueDate, priority, projectCat, isComplete);
    updateTodo()
    dialog.close()
    console.log(projectCat);
})