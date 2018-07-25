import { ActionTypes } from './constants'

const INITIAL_STATE = []

const mapProject = project => {
  return {
    id: project.id,
    title: project.title || "",
    description: project.description || ""
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
        let newProjects = prevState.slice()
        newProjects.splice(projectIndex, 1, action.payload.project)
        return newProjects
      } else {
        return prevState
      }
    case ActionTypes.ADD_PROJECT:
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