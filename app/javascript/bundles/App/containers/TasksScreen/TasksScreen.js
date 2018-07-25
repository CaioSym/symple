import { connect } from 'react-redux'

import * as TaskActions from '../../reducers/Task/actions'
import * as TaskScreeenActions from '../../reducers/TasksScreen/actions'
import { FormTypes } from '../../reducers/TasksScreen/constants'
import TasksScreenView from './TasksScreenView'

const mapForm = form => {
  if (!form) { return null }
  let title = "New Task"
  if (form.type !== FormTypes.CREATE) {
    title = "Edit Task"
  }
  return Object.assign({}, form, {title: title})
}

const mapProjectTitle = form => {
  if (!form) { return null }
  let title = "New Task"
  if (form.type !== FormTypes.CREATE) {
    title = "Edit Task"
  }
  return Object.assign({}, form, {title: title})
}

const mapStateToProps = state => {
  return {
    projectTitle: state.projects,
    form: mapForm(state.screens.tasks.form),
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    onShowTask: (projectId, taskId) => {
    },
    onEditTask: (projectId, task) => {
      dispatch(TaskScreeenActions.openUpdateForm(projectId, task))
    },
    onDeleteTask: (projectId, taskId) => {
      dispatch(TaskActions.deleteTask(projectId, taskId))
    },
    onCreateTask: (projectId, prority) => {
      dispatch(TaskScreeenActions.openCreateForm())
    },
    onTaskFormEditTite: (title) => {
      dispatch(TaskScreeenActions.setFormTitle(title))
    },
    onTaskFormEditDescription: (description) => {
      dispatch(TaskScreeenActions.setFormDescription(description))
    },
    onTaskFormSubmit: () => {
      dispatch(TaskScreeenActions.submitForm())
    },
    onTaskFormDismiss: () => {
      dispatch(TaskScreeenActions.closeForm())
    }
  }  
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let project = stateProps.projectTitle.find(p => p.id === ownProps.projectId)
  console.log(project)
  let stateOverides = {
    projectTitle: project ? project.title : "",
    tasks: stateProps.tasks[ownProps.projectId] || []
  }
  return Object.assign({}, ownProps, stateProps, dispatchProps, stateOverides)
}

const TasksScreen= connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TasksScreenView)

export default TasksScreen