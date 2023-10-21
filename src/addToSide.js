import check from './check.svg'
import deleteIcon from './delete.svg'
import { deleteTodo, completeTodo, getTodo } from "./todo";
import { updateApp } from '.';

export default function addToSide(sideBarTodo) {
    sideBarTodo.innerHTML = ''
    getTodo().forEach((todo, index) => {
        const sideContainer = document.createElement('div')
        const list = document.createElement('li')
        const div = document.createElement('div')
        const image = new Image()
        const read = new Image()

        sideContainer.classList.add('sideBar-container')
        image.src = deleteIcon
        read.src = check
        image.width = 20
        read.width = 20
        list.textContent = todo.title
        div.appendChild(image)
        div.appendChild(read)
        div.style.display = 'none'
        sideContainer.appendChild(list)
        sideContainer.appendChild(div)
        sideBarTodo.appendChild(sideContainer)

        image.addEventListener('click', () => {
            deleteTodo(index)
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
        })

        sideContainer.addEventListener('mouseover', () => {
            div.style.display = 'flex'
        })
        sideContainer.addEventListener('mouseout', () => {
            div.style.display = 'none'
        })

    })

}