import { combineReducers } from 'redux'
import { projectsReducer } from './Project/reducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
})

export default rootReducer