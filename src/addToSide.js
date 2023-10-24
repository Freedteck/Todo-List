import check from './check.svg'
import deleteIcon from './delete.svg'
import { deleteTodo, completeTodo, getTodo } from "./todo";
import { updateApp, removeTodoFromStorage, saveToStorage } from '.';

export default function addToSide(sideBarTodo) {
    sideBarTodo.innerHTML = ''
    getTodo().forEach((todo, index) => {
        const sideContainer = document.createElement('div')
        const list = document.createElement('li')
        const div = document.createElement('div')
        const image = new Image()
        const read = new Image()

        image.classList.add('show')
        read.classList.add('show')
        sideContainer.classList.add('sideBar-container')
        image.src = deleteIcon
        read.src = check
        image.width = 20
        read.width = 20
        list.textContent = todo.title
        div.appendChild(image)
        div.appendChild(read)
        sideContainer.appendChild(list)
        sideContainer.appendChild(div)
        sideBarTodo.appendChild(sideContainer)

        image.addEventListener('click', () => {
            deleteTodo(index)
            removeTodoFromStorage()
            saveToStorage()
            updateApp()
        })

        read.addEventListener('click', () => {
            if (!todo.complete) {
                completeTodo(todo)
                updateApp()
            } else {
                completeTodo(todo)
                updateApp()
            }
            saveToStorage()
        })

        sideContainer.addEventListener('mouseover', () => {
            image.style.display = 'flex'
            read.style.display = 'flex'
        })
        sideContainer.addEventListener('mouseout', () => {
            image.style.display = 'none'
            read.style.display = 'none'
        })

    })

}
