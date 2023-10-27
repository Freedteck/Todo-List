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

const editTodo = (index, title, desc, dueDate, priority, projectCat, complete) => {
    const updatedDetails = {
        title,
        desc,
        dueDate,
        priority,
        projectCat,
        complete
    }

    // Update the todo at the specified index
    todo[index] = updatedDetails;
}

const completeTodo = (todo) => {
    return todo.complete = !todo.complete;
}
const getTodo = () => {
    return todo
}

export { createTodo, deleteTodo, getTodo, completeTodo, editTodo }