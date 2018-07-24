import { connect } from 'react-redux'

import * as ProjectActions from '../../reducers/Project/actions'
import * as ProjectScreeenActions from '../../reducers/ProjectsScreen/actions'
import ProjectsScreenView from './ProjectsScreenView'

const mapStateToProps = state => {
  return {
    form: state.screens.projects.form,
    projects: state.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    onShowProject: (projectId) => {
    },
    onEditProject: (project) => {
      dispatch(ProjectScreeenActions.openUpdateForm(project))
    },
    onDeleteProject: (projectId) => {
      dispatch(ProjectActions.deleteProject(projectId))
    },
    onCreateProject: (project) => {
      dispatch(ProjectScreeenActions.openCreateForm())
    },
    onProjectFormEditTite: (title) => {
      dispatch(ProjectScreeenActions.setFormTitle(title))
    },
    onProjectFormEditDescription: (description) => {
      dispatch(ProjectScreeenActions.setFormDescription(description))
    },
    onProjectFormSubmit: (project) => {
      dispatch(ProjectScreeenActions.submitForm())
    },
    onProjectFormDismiss: (project) => {
      dispatch(ProjectScreeenActions.closeForm())
    }
  }  
}

const ProjectsScreen= connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsScreenView)

export default ProjectsScreen