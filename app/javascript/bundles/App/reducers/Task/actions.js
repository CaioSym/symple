import { ActionTypes } from './constants'
import * as ProjectsService from '../../services/ProjectsService'

function setTasks(projectId, tasks) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.SET_TASKS,
      payload: {
        projectId: projectId,
        tasks: tasks
      }
    })
    return Promise.resolve()
  }
}

function setTask(projectId, task) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.SET_TASK,
      payload: {
        projectId: projectId,
        task: task
      }
    })
    return Promise.resolve()
  }
}

function addTask(projectId, task) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.ADD_TASK,
      payload: {
        projectId: projectId,
        task: task
      }
    })
    return Promise.resolve()
  }
}

function removeTask(projectId, taskId) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.REMOVE_TASK,
      payload: {
        projectId: projectId,
        taskId: taskId
      }
    })
    return Promise.resolve()
  }
}

export function loadTasks(projectId) {
  return function (dispatch, getState) {
    return ProjectsService.fetchTasks(projectId)
      .then(tasks => dispatch(setTasks(projectId, tasks)))
      .catch(e => console.log(e))
  }
}

export function createTask(projectId, task) {
  return function (dispatch, getState) {
    return ProjectsService.createTask(projectId, task)
      .then(task => dispatch(addTask(projectId, task)))
      .catch(e => console.log(e))
  }
}

export function updateTask(projectId, task) {
  return function (dispatch, getState) {
    return ProjectsService.updateTask(projectId, task)
      .then(task => dispatch(setTask(projectId, task)))
      .catch(e => console.log(e))
  }
}

export function deleteTask(projectId, taskId) {
  return function (dispatch, getState) {
    return ProjectsService.deleteTask(projectId, taskId)
      .then(() => dispatch(removeTask(projectId, taskId)))  
      .catch(e => console.log(e))
  }
}