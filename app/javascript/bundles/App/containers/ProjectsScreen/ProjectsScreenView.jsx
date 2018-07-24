import React from 'react'
import PropTypes from 'prop-types'

import { Jumbotron, Button } from 'reactstrap';

import ProjectsList from '../../components/Project/ProjectsList'

const ProjectsScreenView = (props) => {
  return (
    <div>
      <h1>
        Projects
      </h1>
      <hr />
      <Jumbotron>
        <ProjectsList projects={props.projects}
                      onViewProject={(pId) => props.onShowProject(pId)}
                      onEditProject={(pId) => props.onEditProject(pId)}
                      onDeleteProject={(pId) => props.onDeleteProject(pId)} />

        <Button color='primary' 
                onClick={props.onCreateProject}>
          + Create a new project!
        </Button>
      </Jumbotron>
      <Modal isOpen={props.form != null}
             toggle={props.onProjectFormDismiss}>
        <ModalHeader toggle={props.onProjectFormDismiss}>
          {props.form.title}
        </ModalHeader>
        <ModalBody>
          <form onSubmit={}>
            <label htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={props.form.params.title}
              onChange={(e) => props.onProjectFormEditTite()}/>

            <label htmlFor="description">
              Description:
            </label>
            <input
              id="description"
              type="text"
              value={props.form.params.description}
              onChange={(e) => props.onProjectFormEditDescription()}/>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onProjectFormSubmit}>Save</Button>
          {' '}
          <Button color="secondary" onClick={props.onProjectFormDismiss}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ProjectsScreenView.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  form: PropTypes.object,
  
  onShowProject: PropTypes.func.isRequired,
  onEditProject: PropTypes.func.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  onCreateProject: PropTypes.func.isRequired,
  onProjectFormEditTite: PropTypes.func.isRequired,
  onProjectFormEditDescription: PropTypes.func.isRequired,
  onProjectFormSubmit: PropTypes.func.isRequired
  onProjectFormDismiss: PropTypes.func.isRequired
}

export default ProjectsScreenView