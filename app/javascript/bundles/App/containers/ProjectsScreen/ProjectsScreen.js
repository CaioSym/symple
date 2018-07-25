import { connect } from 'react-redux'

import * as ProjectActions from '../../reducers/Project/actions'
import { openTasksScreen } from '../../reducers/TasksScreen/actions'
import * as ProjectScreeenActions from '../../reducers/ProjectsScreen/actions'
import { FormTypes } from '../../reducers/ProjectsScreen/constants'
import ProjectsScreenView from './ProjectsScreenView'

const mapForm = form => {
  if (!form) { return null }
  let title = "New Project"
  if (form.type !== FormTypes.CREATE) {
    title = "Edit Project"
  }
  return Object.assign({}, form, {title: title})
}

const mapStateToProps = state => {
  return {
    form: mapForm(state.screens.projects.form),
    projects: state.projects.sort((a, b) => a.id - b.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    onShowProject: (projectId) => {
      dispatch(openTasksScreen(projectId))
    },
    onEditProject: (projectId) => {
      dispatch(ProjectScreeenActions.openUpdateForm(projectId))
    },
    onDeleteProject: (projectId) => {
      dispatch(ProjectActions.deleteProject(projectId))
    },
    onCreateProject: () => {
      dispatch(ProjectScreeenActions.openCreateForm())
    },
    onProjectFormEditTite: (title) => {
      dispatch(ProjectScreeenActions.setFormTitle(title))
    },
    onProjectFormEditDescription: (description) => {
      dispatch(ProjectScreeenActions.setFormDescription(description))
    },
    onProjectFormSubmit: () => {
      dispatch(ProjectScreeenActions.submitForm())
    },
    onProjectFormDismiss: () => {
      dispatch(ProjectScreeenActions.closeForm())
    }
  }  
}

const ProjectsScreen= connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsScreenView)

export default ProjectsScreen