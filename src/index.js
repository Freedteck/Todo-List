import './style.css'
import addToMain from './addToMain';
import addToSide from './addToSide';
import { createTodo, getTodo } from "./todo";
import { getProject, addProject } from './project';
import addToProject from './addToProject';
import { format } from 'date-fns'

// Dom Variables
const addTodo = document.querySelector('.add-todo');
const mainContainer = document.querySelector('.todo-container');
const sideBarTodo = document.getElementById('todo-list')
const projectSide = document.getElementById('project-list')
const dialog = document.getElementById('todo-dialog')
const cancel = document.getElementById('cancel')
const plusProject = document.querySelector('.add-project')
const projectTitle = document.querySelector('.projects .top')

const userTitle = document.getElementById('title')
const userDesc = document.getElementById('description')
const userPrior = document.getElementById('priority')
export const userProject = document.getElementById('project')
const userDate = document.getElementById('date')

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
        updateApp()
        updateP()
    } else {
        alert('Please Try Another Name')
    }

})

projectTitle.addEventListener('mouseover', () => {
    plusProject.style.display = 'block'
})

projectTitle.addEventListener('mouseout', () => {
    plusProject.style.display = 'none'
})

/* const saveToStorage = () => {
    const todoList = getTodo()

    todoList.forEach((todo, index) => {
        localStorage.setItem(`todo_${index}`, JSON.stringify(todo))
    })

}

export const removeFromStorage = () => {
    const todoList = getTodo()
    todoList.forEach((todo, index) => {
        // if (localStorage) {
        localStorage.removeItem(`todo_${index}`)
        // }
    })

}

const getFromStorage = () => {
    const todoList = getTodo();
     let index = 0;


    // // Retrieve to-do items from localStorage and create them
     while (true) {
       const todo = JSON.parse(localStorage.getItem(`todo_${index}`));
       if (todo === null) {
        break; // Exit the loop when no more to-do items are found
       }

       todoList.push(todo);
      index++;
    }

    todoList.forEach((todo, index) => {

        createTodo(todo.title, todo.desc, todo.dueDate, todo.priority, todo.projectCat, todo.isComplete);
        // console.log(todos);
        updateApp();
    });

    console.log(todoList);
};

getFromStorage();
 */
 
export const saveToStorage = () => {
 
  localStorage.clear()
  const todoList = getTodo();
  
  // Save each to-do item individually with a unique key
  todoList.forEach((todo, index) => {
    localStorage.setItem(`todo_${index}`, JSON.stringify(todo));
  });
};

export const removeFromStorage = () => {
  const todoList = getTodo();
  
  // Remove each to-do item from localStorage
  todoList.forEach((todo, index) => {
    localStorage.removeItem(`todo_${index}`);
  });
};

const getFromStorage = () => {
  const todoList = [];
  let index = 0;

  // Retrieve to-do items from localStorage and create them
  while (true) {
    const todo = JSON.parse(localStorage.getItem(`todo_${index}`));
    if (todo === null) {
      break; // Exit the loop when no more to-do items are found
    }
    
    todoList.push(todo);
    index++;
  }

  todoList.forEach((todo) => {
    createTodo(todo.title, todo.desc, todo.dueDate, todo.priority, todo.projectCat, todo.isComplete);
    updateApp();
  });
};

getFromStorage();
