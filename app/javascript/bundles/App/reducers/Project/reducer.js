import { ActionTypes } from './constants'

const INITIAL_STATE = []

const mapProject = project => {
  return {
    id: project.id,
    title: project.title || "",
    description: project.description || "",
    tasks: []
  }
}

export const projectsReducer = (prevState = INITIAL_STATE, action) => {
  let project = undefined
  let projectIndex = undefined
  switch (action.type) {
    case ActionTypes.SET_PROJECTS:
      return action.payload.projects.map(mapProject)
    case ActionTypes.SET_PROJECT:
      project = mapProject(action.payload.project)
      projectIndex = prevState.findIndex(p => p.id === project.id)
      if (projectIndex >= 0 ) {
        return prevState.slice().splice(projectIndex, 1)
      } else {
        return prevState
      }
    case ActionTypes.ADD_PROJECT:
      console.log("AAAA")
      console.log(action.payload.project)
      project = mapProject(action.payload.project)
      if (prevState.find(p => p.id === project.id)) {
        return prevState
      } else {
        return prevState.concat([project])
      }
    case ActionTypes.REMOVE_PROJECT:
      return prevState.filter(p => p.id !== action.payload.projectId)
    case ActionTypes.CLEAR_PROJECTS:
      return INITIAL_STATE
    default:
      return prevState
  }
}