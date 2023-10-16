import './style.css'
import deleteIcon from './delete.svg'
// import downIcon from './down.svg'
// import upIcon from './up.svg'
import check from './check.svg'
import { createTodo, deleteTodo, getTodo, completeTodo } from "./todo";

// Dom Variables
const addTodo = document.querySelector('.add-todo');
const mainContainer = document.querySelector('.todo-container');
const sideBarTodo = document.getElementById('todo-list')

// Logic to Add todo details to main Screen
const addMainTodo = (todo, index) => {

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
    // let comp = completeTodo(todo)


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

    if (todo.complete) {
        title.classList.add('complete');
    }

    image.addEventListener('click', () => {
        deleteTodo(index)
        updateTodo()
        addSideTodo()
    })

    read.addEventListener('click', () => {
        if (!todo.complete) {
            title.classList.add('complete');
            completeTodo(todo)

        } else {
            title.classList.remove('complete');
            completeTodo(todo)
        }
    });



    return section
}

// Logic to Add Todo List to sideBar
const addSideTodo = () => {
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
        sideContainer.appendChild(list)
        sideContainer.appendChild(div)
        sideBarTodo.appendChild(sideContainer)

        image.addEventListener('click', () => {
            deleteTodo(index)
            updateTodo()
            addSideTodo()
        })

        read.addEventListener('click', () => {
            if (!todo.complete) {
                // title.classList.add('complete');
                completeTodo(todo)
                // updateTodo()

            } else {
                // title.classList.remove('complete');
                completeTodo(todo)
            }
updateTodo()
            // Toggle the "complete" status
            console.log(getTodo());
            // Update the to-do list
            // updateTodo();
        });
    });

}

// Logic to update todo
const updateTodo = () => {
    mainContainer.innerHTML = ''

    // Add Todo to main container
    getTodo().forEach((todo, index) => {
        mainContainer.appendChild(addMainTodo(todo, index))

        // if (todo.complete) {
        //     todo.complete != todo.complete
        // }
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
    console.log(getTodo());
    updateTodo()
    addSideTodo()
})