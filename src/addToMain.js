import check from './check.svg'
import deleteIcon from './delete.svg'
import pencil from './pencil-outline.svg'
import { deleteTodo, completeTodo, getTodo, editTodo } from "./todo";
import { updateApp, removeTodoFromStorage, saveToStorage } from '.';

export let update = false
export default function addToMain(mainContainer) {
    const dialog = document.getElementById('todo-dialog')
    const userTitle = document.getElementById('title')
    const userDesc = document.getElementById('description')
    const userPrior = document.getElementById('priority')
    const userProject = document.getElementById('project')
    const userDate = document.getElementById('date')

    mainContainer.innerHTML = ''
    // Dynamic Dom Variables
    getTodo().forEach((todo, index) => {
        const section = document.createElement('div');
        const topDiv = document.createElement('div')
        const bottomDiv = document.createElement('div')
        const sideDiv = document.createElement('div')
        const dateAndPrio = document.createElement('div')
        const title = document.createElement('h3');
        const line = document.createElement('hr')
        const description = document.createElement('p');
        const date = document.createElement('p');
        const priority = document.createElement('p');
        const project = document.createElement('p')
        // const rule = document.createElement('hr')
        const bottomSection = document.createElement('section')
        const image = new Image()
        const read = new Image()
        const edit = new Image()


        image.src = deleteIcon;
        read.src = check
        edit.src = pencil
        image.width = 20
        read.width = 20
        edit.width = 20

        read.classList.add('show')
        image.classList.add('show')
        edit.classList.add('show')
        edit.classList.add('edit')
        section.classList.add('section');
        date.classList.add('date')
        title.textContent = todo.title

        description.textContent = todo.desc
        date.textContent = todo.dueDate
        project.textContent = todo.projectCat
        priority.style.width = '16px'
        priority.style.height = '16px'
        priority.style.borderRadius = '50%'
        // date.textContent = todo.dueDate

        switch (todo.priority) {
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

        topDiv.appendChild(title)
        sideDiv.appendChild(edit)
        sideDiv.appendChild(image)
        topDiv.appendChild(sideDiv)
        bottomDiv.appendChild(description)
        bottomDiv.appendChild(read)
        dateAndPrio.appendChild(date)
        dateAndPrio.appendChild(project)
        dateAndPrio.appendChild(priority)
        section.appendChild(topDiv)
        section.appendChild(line)
        bottomSection.appendChild(bottomDiv)
        bottomSection.appendChild(dateAndPrio)
        // bottomSection.appendChild(bottomDiv)
        section.appendChild(bottomSection)
        // section.appendChild(dateAndPrio)
        // section.appendChild(rule)
        // mainContainer.appendChild(head)
        mainContainer.appendChild(section)

        image.addEventListener('click', () => {
            deleteTodo(index)
            removeTodoFromStorage()
            saveToStorage()
            updateApp()
        })


        if (todo.complete == true) {
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
            saveToStorage()
        });

        edit.addEventListener('click', () => {
            userTitle.value = todo.title;
            userDate.value = todo.dueDate;
            userDesc.value = todo.desc;
            userPrior.value = todo.priority;
            userProject.text = todo.projectCat;
            dialog.show();
            update = true;
            console.log(index);
    
            const handleFormSubmit = (e) => {
                e.preventDefault();
    
                const title = userTitle.value;
                const desc = userDesc.value;
                let projectCat = userProject.value;
                const priority = userPrior.value;
                const dueDate = userDate.value;
                let isComplete = false;
    
                if (update === true) {
                    console.log(index);
                    editTodo(index, title, desc, dueDate, priority, projectCat, isComplete);
                    saveToStorage();
                    updateApp();
                    update = false;
                    dialog.close();
                }
            };
    
            document.querySelector(".former").addEventListener("submit", handleFormSubmit);
        });
        // const currentTodoIndex = index;

       

        // document.querySelector(".former").addEventListener("submit", handleForm
            // e.preventDefault()

            // const title = userTitle.value
            // const desc = userDesc.value
            // let projectCat = userProject.value
            // const priority = userPrior.value
            // const dueDate = userDate.value
            // let isComplete = false

            // // if (update === true) {
            //     console.log(index);
            //     editTodo(index, title, desc, dueDate, priority, projectCat, isComplete);
            //     saveToStorage()
            //     updateApp()
            //     update = false
            //     dialog.close()
            // // }

        // )
        section.addEventListener('mouseover', () => {
            image.style.display = 'block'
            edit.style.display = 'block'
        })
        section.addEventListener('mouseover', () => {
            read.style.display = 'block'
        })

        section.addEventListener('mouseout', () => {
            image.style.display = 'none'
            edit.style.display = 'none'
        })
        section.addEventListener('mouseout', () => {
            read.style.display = 'none'
        })
    })
}

// export { edit }