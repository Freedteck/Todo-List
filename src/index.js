import './style.css'
import addToMain from './addToMain';
import addToSide from './addToSide';
import { createTodo, getTodo, deleteTodo } from "./todo";
import { getProject, addProject } from './project';
import addToProject from './addToProject';
import calendar from './calendar-check.svg'
import deleteIcon from './delete.svg'
import plusIcon from './plus.svg'
import { format } from 'date-fns'

// Dom Variables
const addTodo = document.querySelector('.add-todo button');
const mainContainer = document.querySelector('.todo-container');
const sideBarTodo = document.getElementById('todo-list')
const projectSide = document.getElementById('project-list')
const dialog = document.getElementById('todo-dialog')
const cancel = document.getElementById('cancel')
const plusProject = document.querySelector('.add-project')
const projectTitle = document.querySelector('.projects .top')
const todoLogo = document.getElementById('todo-logo')
const all = document.querySelector('.all')
const sideBar = document.querySelector('.sidebar')
const completed = document.querySelector('.completed')
const project = document.querySelector('.project')

const userTitle = document.getElementById('title')
const userDesc = document.getElementById('description')
const userPrior = document.getElementById('priority')
export const userProject = document.getElementById('project')
const userDate = document.getElementById('date')

todoLogo.src = calendar
plusProject.src = plusIcon
const day = new Date()
const year = day.getFullYear()
const month = day.getMonth() + 1
const date = day.getDate()

const today = `${year}-${month}-${date}`

userDate.setAttribute('min', today)

export const updateApp = () => {
    updateTodo()
    updateProject()
}
// Logic to update todo
const updateTodo = () => {
    addToMain(mainContainer, choosenPriority)
    addToSide(sideBarTodo)
}

const updateProject = () => {
    projectSide.innerHTML = ''
    getProject().forEach((project, index) => {
        addToProject(project, projectSide, index)
    })
}

updateProject()

let choosenProject = ''
let choosenPriority = ''
let defaultPriority = userPrior.value
const defaultProject = userProject.value

addTodo.addEventListener('click', () => {
    dialog.show()
    userProject.value = defaultProject
    choosenProject = defaultProject
    userPrior.value = defaultPriority
    choosenPriority = defaultPriority

})

userProject.addEventListener('change', () => {
    choosenProject = userProject.selectedOptions[0].text
})

userPrior.addEventListener('change', () => {
    choosenPriority = userPrior.value
})

export const updateP = () => {
    const val = `<option value="" disabled selected id="default-p">Add To Project</option>`
    userProject.innerHTML = val
    getProject().forEach(proption => {

        const data = `<option value=${proption} class="opt">${proption[0].toUpperCase() + proption.slice(1)}</option>`

        userProject.insertAdjacentHTML("beforeend", data)
    })
}

updateP()
document.querySelector(".former").addEventListener("submit", (e) => {
    e.preventDefault()

    const title = userTitle.value
    const desc = userDesc.value
    let projectCat = choosenProject
    const priority = choosenPriority
    const dueDate = format(new Date(userDate.value), 'MMM do yyyy')
    let isComplete = false

    createTodo(title, desc, dueDate, priority, projectCat, isComplete);
    saveToStorage()
    updateApp()
    dialog.close()

})

cancel.addEventListener('click', () => {
    dialog.close()
})

plusProject.addEventListener('click', () => {
    const projectName = prompt('Enter project Name: ', 'Any')
    if (!getProject().includes(projectName) && projectName != null) {
        addProject(projectName);
        saveToStorage()
        updateApp()
        updateP()
    } else {
        alert('Please Try Another Name')
    }

})

plusProject.classList.add('show')
projectTitle.addEventListener('mouseover', () => {
    plusProject.style.display = 'block'
})

projectTitle.addEventListener('mouseout', () => {
    plusProject.style.display = 'none'
})

export const saveToStorage = () => {
    localStorage.clear()
    const todoList = getTodo();
    const projectList = getProject()

    // Save each to-do item individually with a unique key
    todoList.forEach((todo, index) => {
        localStorage.setItem(`todo_${index}`, JSON.stringify(todo));
    });
    projectList.forEach((project, index) => {
        localStorage.setItem(`project_${index}`, project)
    })
};

export const removeTodoFromStorage = () => {
    const todoList = getTodo();

    // Remove each to-do item from localStorage
    todoList.forEach((todo, index) => {
        localStorage.removeItem(`todo_${index}`);
    });
};

export const removeProjectFromStorage = () => {
    const projectList = getProject()

    projectList.forEach((project, index) => {
        localStorage.removeItem(`project_${index}`)
    })
}

const getFromStorage = () => {
    const todoList = [];
    const projectList = [];
    let index = 0;

    // Retrieve to-do items and projects from localStorage
    while (true) {
        const todo = JSON.parse(localStorage.getItem(`todo_${index}`));
        const project = localStorage.getItem(`project_${index}`);

        if (todo === null && project === null) {
            break; // Exit the loop when no more to-do items or projects are found
        }

        if (todo !== null) {
            todoList.push(todo);
        }

        if (project !== null) {
            projectList.push(project);
        }

        index++;
    }

    todoList.forEach((todo) => {
        createTodo(todo.title, todo.desc, todo.dueDate, todo.priority, todo.projectCat, todo.complete);
    });

    getProject().length = 0
    projectList.forEach(project => {
        addProject(project)
    })
    updateP()
    updateApp()

    console.table(todoList);
    console.table(projectList);
};

getFromStorage();

all.addEventListener('click', () => {
    updateTodo()
    addTodo.style.display = 'block'

})

project.addEventListener('click', () => {
    const head = document.querySelector('.head')

    mainContainer.innerHTML = ''
    // mainContent.style.padding = '20px'
    const lists = showProjects()
    head.textContent = 'All Projects'
    head.style.textAlign = 'center'
    mainContainer.appendChild(lists)
    addTodo.style.display = 'none'
})
const showProjects = () => {
    const lists = document.createElement('ul');
    getProject().forEach((project, index) => {
        const li = document.createElement('li');
        li.textContent = project;
        lists.appendChild(li); // Append the list item to the list
    });
    return lists;
};

completed.addEventListener('click', () => {
    const head = document.querySelector('.head')
    mainContainer.innerHTML = ''
    addTodo.style.display = 'none'
    head.textContent = 'Completed Projects'
    const getCompleted = getTodo().filter((todo) => todo.complete === true)
    getCompleted.forEach((completedTodo, index) => {

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

        image.src = deleteIcon;
        image.width = 20

        section.classList.add('section');
        date.classList.add('date')
        title.textContent = completedTodo.title
        description.textContent = completedTodo.desc
        date.textContent = completedTodo.dueDate
        project.textContent = completedTodo.projectCat
        priority.style.width = '16px'
        priority.style.height = '16px'
        priority.style.borderRadius = '50%'
        title.textContent = completedTodo.title

        topDiv.appendChild(title)
        topDiv.appendChild(image)
        bottomDiv.appendChild(description)
        dateAndPrio.appendChild(date)
        dateAndPrio.appendChild(project)
        dateAndPrio.appendChild(priority)
        section.appendChild(topDiv)
        section.appendChild(line)
        section.appendChild(bottomDiv)
        section.appendChild(dateAndPrio)
        section.appendChild(rule)

        switch (completedTodo.priority) {
            case 'highest':
                priority.style.backgroundColor = 'red'
                date.style.borderColor = "red"
                date.style.color = "red"
                break;
            case 'high':
                priority.style.backgroundColor = 'orange'
                date.style.borderColor = "orange"
                date.style.color = "orange"
                break;
            case 'normal':
                priority.style.backgroundColor = 'green'
                date.style.borderColor = "green"
                date.style.color = "green"
                break;
            case 'low':
                priority.style.backgroundColor = 'blue'
                date.style.borderColor = "blue"
                date.style.color = "blue"
                break;
            case 'lowest':
                priority.style.backgroundColor = 'lightblue'
                date.style.borderColor = "green"
                date.style.color = "green"
            default:
                break;
        }
        if (completedTodo.complete === true) {
            title.classList.add('complete');
        }

        mainContainer.appendChild(section)

        image.addEventListener('click', () => {
            deleteTodo(index)
            removeTodoFromStorage()
            saveToStorage()
            updateApp()
        })
    })
})

const nav = document.querySelectorAll('.nav')

nav.forEach(navs => {
    navs.addEventListener('click', () => {

        nav.forEach(navs => {
            navs.classList.remove('active')
        })
        navs.classList.add('active')
    })
})

const menu = document.querySelector('.menu')
menu.addEventListener('click', () => {
    sideBar.classList.add('show-side')
})

const exit = document.querySelector('.exit')

exit.addEventListener('click', () => {
    sideBar.classList.remove('show-side')
})