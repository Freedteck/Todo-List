import deleteIcon from './delete.svg'
import { removeProject, getProject } from './project'
import { getTodo, deleteTodo } from './todo'
import { updateApp, updateP, saveToStorage, removeProjectFromStorage } from '.'

export default function addToProject(project, projectTodo, index) {
    const sideContainer = document.createElement('div')
    const list = document.createElement('li')
    const div = document.createElement('div')
    const image = new Image()
    const count = document.createElement('p')

    sideContainer.classList.add('sideBar-container')
    image.src = deleteIcon
    image.width = 20

    image.style.display = 'none'

    let counter = updateCount(project, getTodo)
    list.textContent = project
    count.textContent = counter
    div.appendChild(count)
    div.appendChild(image)
    sideContainer.appendChild(list)
    sideContainer.appendChild(div)
    projectTodo.appendChild(sideContainer)

    image.addEventListener('click', () => {
        removeProject(index)
        const todos = getTodo();
        for (let i = todos.length - 1; i >= 0; i--) {
            if (todos[i].projectCat === project) {
                deleteTodo(i);
            }
        }
        
        updateP()
        removeProjectFromStorage()
        saveToStorage()
        updateApp()
    })

    sideContainer.addEventListener('mouseover', () => {
        image.style.display = 'block'
    })
    sideContainer.addEventListener('mouseout', () => {
        image.style.display = 'none'
    })
}

function updateCount(project, getTodo) {
    let counter = 0
    getTodo().forEach(todo => {
        if (getProject().includes(todo.projectCat) && todo.projectCat === project) {
            counter++
        }
    })
    return counter
}