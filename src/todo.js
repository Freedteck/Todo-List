const todo = []; // Array of Todos

const createTodo = (title, desc, dueDate, priority, projectCat, complete) => {
    const todoDetails = {
        title,
        desc,
        dueDate,
        priority,
        projectCat,
        complete,
    }

    todo.push(todoDetails)
}

const deleteTodo = (index) => {
    todo.splice(index, 1)
}

const completeTodo = (todo) => {
    return todo.complete = !todo.complete;
}
const getTodo = () => {
    return todo
}

export { createTodo, deleteTodo, getTodo, completeTodo }