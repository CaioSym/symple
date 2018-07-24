import { combineReducers } from 'redux'
import { projectsReducer } from './Project/reducer'
import { projectsScreenReducer } from './ProjectsScreen/reducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
  screens: combineReducers({
    projects: projectsScreenReducer
  })
})

export default rootReducer