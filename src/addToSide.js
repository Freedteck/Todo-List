import check from './check.svg'
import deleteIcon from './delete.svg'
import { deleteTodo, completeTodo } from "./todo";

export default function addToSide(todo, sideBarTodo, index, updateTodo) {
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
    sideContainer.appendChild(list)
    sideContainer.appendChild(div)
    sideBarTodo.appendChild(sideContainer)

    image.addEventListener('click', () => {
        deleteTodo(index)
        updateTodo()
    })

    read.addEventListener('click', () => {
        if (!todo.complete) {
            completeTodo(todo)
            updateTodo()
        } else {
            completeTodo(todo)
            updateTodo()
        }
    })
}