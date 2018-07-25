import { combineReducers } from 'redux'
import { projectsReducer } from './Project/reducer'
import { tasksReducer } from './Task/reducer'
import { projectsScreenReducer } from './ProjectsScreen/reducer'
import { tasksScreenReducer } from './TasksScreen/reducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
  screens: combineReducers({
    projects: projectsScreenReducer,
    tasks: tasksScreenReducer
  })
})

export default rootReducer