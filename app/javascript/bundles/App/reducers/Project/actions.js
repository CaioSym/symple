import { ActionTypes } from './constants'
import * as ProjectsService from '../../services/ProjectsService'

function setProjects(projects) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.SET_PROJECTS,
      payload: {
        projects: projects
      }
    })
    return Promise.resolve()
  }
}

function setProject(project) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.SET_PROJECT,
      payload: {
        project: project
      }
    })
    return Promise.resolve()
  }
}

function addProject(project) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.ADD_PROJECT,
      payload: {
        project: project
      }
    })
    return Promise.resolve()
  }
}

function removeProject(projectId) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.REMOVE_PROJECT,
      payload: {
        projectId: projectId
      }
    })
    return Promise.resolve()
  }
}

export function createProject(project) {
  return function (dispatch, getState) {
    ProjectsService.createProject(project)
      .then(project => dispatch(addProject(project)))
      .catch(e => console.log(e))
  }
}

export function updateProject(project) {
  return function (dispatch, getState) {
    ProjectsService.updateProject(project)
      .then(project => dispatch(setProject(project)))
      .catch(e => console.log(e))
  }
}

export function deleteProject(projectId) {
  return function (dispatch, getState) {
    ProjectsService.deleteProject(projectId)
      .then(() => dispatch(removeProject(projectId)))  
      .catch(e => console.log(e))
  }
}