import check from './check.svg'
import deleteIcon from './delete.svg'
import { deleteTodo, completeTodo } from "./todo";

export default function addToMain(todo, mainContainer, index, updateTodo) {
    // Dynamic Dom Variables
    const section = document.createElement('div');
    const topDiv = document.createElement('div')
    const bottomDiv = document.createElement('div')
    const dateAndPrio = document.createElement('div')
    const title = document.createElement('h3');
    const line = document.createElement('hr')
    const description = document.createElement('p');
    const date = document.createElement('p');
    const priority = document.createElement('p');
    const image = new Image()
    const read = new Image()

    image.src = deleteIcon;
    read.src = check
    image.width = 30
    read.width = 30

    section.classList.add('section');

    title.textContent = todo.title
    description.textContent = todo.desc
    date.textContent = todo.dueDate
    priority.textContent = todo.priority

    topDiv.appendChild(title)
    topDiv.appendChild(image)
    bottomDiv.appendChild(description)
    bottomDiv.appendChild(read)
    dateAndPrio.appendChild(date)
    dateAndPrio.appendChild(priority)
    section.appendChild(topDiv)
    section.appendChild(line)
    section.appendChild(bottomDiv)
    section.appendChild(dateAndPrio)
    mainContainer.appendChild(section)

    image.addEventListener('click', () => {
        deleteTodo(index)
        updateTodo()
    })

    if (todo.complete) {
        title.classList.add('complete');
    }

    read.addEventListener('click', () => {
        if (!todo.complete) {
            title.classList.add('complete');
            completeTodo(todo)

        } else {
            title.classList.remove('complete');
            completeTodo(todo)
        }
    });
}
