import check from './check.svg'
import deleteIcon from './delete.svg'
import { deleteTodo, completeTodo, getTodo } from "./todo";
import { updateApp, removeFromStorage } from '.';

export default function addToMain(mainContainer) {
    mainContainer.innerHTML = ''
    // Dynamic Dom Variables
    getTodo().forEach((todo, index) => {
        const section = document.createElement('div');
        const topDiv = document.createElement('div')
        const bottomDiv = document.createElement('div')
        const dateAndPrio = document.createElement('div')
        const title = document.createElement('h3');
        const line = document.createElement('hr')
        const description = document.createElement('p');
        const date = document.createElement('p');
        const priority = document.createElement('p');
        const project = document.createElement('p')
        const rule = document.createElement('hr')
        const image = new Image()
        const read = new Image()

        image.src = deleteIcon;
        read.src = check
        image.width = 20
        read.width = 20

        image.style.display = 'none'
        read.style.display = 'none'

        section.classList.add('section');
        date.classList.add('date')
        title.textContent = todo.title
        description.textContent = todo.desc
        date.textContent = todo.dueDate
        project.textContent = todo.projectCat
        priority.style.width = '16px'
        priority.style.height = '16px'
        priority.style.borderRadius = '50%'
        date.textContent = todo.dueDate

        switch (todo.priority) {
            case 'highest':
                priority.style.backgroundColor = 'red'
                date.style.backgroundColor = "red"
                date.style.color = "orange"
                break;
            case 'high':
                priority.style.backgroundColor = 'orange'
                date.style.backgroundColor = "orange"
                date.style.color = "white"
                break;
            case 'normal':
                priority.style.backgroundColor = 'green'
                date.style.backgroundColor = "green"
                date.style.color = "white"
                break;
            case 'low':
                priority.style.backgroundColor = 'blue'
                date.style.backgroundColor = "blue"
                date.style.color = "white"
                break;
            case 'lowest':
                priority.style.backgroundColor = 'lightblue'
                date.style.backgroundColor = "lightblur"
                date.style.color = "green"
            default:
                break;
        }

        topDiv.appendChild(title)
        topDiv.appendChild(image)
        bottomDiv.appendChild(description)
        bottomDiv.appendChild(read)
        dateAndPrio.appendChild(date)
        dateAndPrio.appendChild(project)
        dateAndPrio.appendChild(priority)
        section.appendChild(topDiv)
        section.appendChild(line)
        section.appendChild(bottomDiv)
        section.appendChild(dateAndPrio)
        section.appendChild(rule)
        mainContainer.appendChild(section)

        image.addEventListener('click', () => {
            deleteTodo(index)
            removeFromStorage(index)
            updateApp()
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

        section.addEventListener('mouseover', () => {
            image.style.display = 'block'
        })
        section.addEventListener('mouseover', () => {
            read.style.display = 'block'
        })

        section.addEventListener('mouseout', () => {
            image.style.display = 'none'
        })
        section.addEventListener('mouseout', () => {
            read.style.display = 'none'
        })
    })
}
