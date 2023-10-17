const projectArray = ['Coding', 'Exercise', 'Reading']

const addProject = (title) => {
    const projectDetails = title

    projectArray.push(projectDetails)
}

const removeProject = (index) => {
    projectArray.splice(index, 1)
}

const getProject = () => {

    return projectArray
}

export { addProject, removeProject, getProject }