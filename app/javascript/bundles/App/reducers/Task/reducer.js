import { ActionTypes } from './constants'

const INITIAL_STATE = {}

const mapTask = task => {
  return {
    id: task.id,
    title: task.title || "",
    priority: task.priority || 1,
    completed: task.completed || false,
    description: task.description || ""
  }
}

export const tasksReducer = (prevState = INITIAL_STATE, action) => {
  let projects = {}
  let task = undefined
  let taskIndex = undefined
  let projectId = action.payload ? action.payload.projectId : undefined
  switch (action.type) {
    case ActionTypes.SET_TASKS:
      projects[projectId] = action.payload.tasks.map(mapTask)
      return Object.assign({}, prevState, projects)
    case ActionTypes.SET_TASK:
      task = mapTask(action.payload.task)
      taskIndex = prevState[projectId].findIndex(p => p.id === task.id)
      if (taskIndex >= 0 ) {
        let newTasks = prevState[projectId].slice()
        newTasks.splice(taskIndex, 1, action.payload.task)
        projects[projectId] = newTasks
        return Object.assign({}, prevState, projects)
      } else {
        return prevState
      }
    case ActionTypes.ADD_TASK:
      task = mapTask(action.payload.task)
      if (prevState[projectId].find(t => t.id === task.id)) {
        return prevState
      } else {
        projects[projectId] = prevState[projectId].concat([task])
        return Object.assign({}, prevState, projects)
      }
    case ActionTypes.REMOVE_TASK:
      projects[projectId] = prevState[projectId].filter(p => p.id !== action.payload.taskId)
      return Object.assign({}, prevState, projects)
    case ActionTypes.CLEAR_TASKS:
      projects = Object.assign({}, prevState)
      delete projects[projectId]
      return projects
    default:
      return prevState
  }
}