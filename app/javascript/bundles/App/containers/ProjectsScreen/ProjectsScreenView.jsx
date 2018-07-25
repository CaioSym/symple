import React from 'react'
import PropTypes from 'prop-types'

import { Jumbotron,
         Button,
         FormGroup,
         InputGroup, 
         InputGroupAddon,
         InputGroupText,
         Input,
         Label,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter } from 'reactstrap';

import './ProjectsScreenView.css'
import ProjectsList from '../../components/Project/ProjectsList'

const renderModal = (props) => {
  if (!props.form) { return null; }

  return (
    <Modal isOpen={props.form != null}
           toggle={props.onProjectFormDismiss}>
      <ModalHeader toggle={props.onProjectFormDismiss}>
        {props.form.title}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
            <Input
              id="title"
              type="text"
              placeholder="Title"
              value={props.form.params.title || ""}
              onChange={(e) => props.onProjectFormEditTite(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
            <Input
              id="description"
              type="textarea"
              placeholder="Description"
              value={props.form.params.description || ""}
              onChange={(e) => props.onProjectFormEditDescription(e.target.value)}/>            
          </InputGroup>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button className='AppButton AppButton--Primary'
                onClick={props.onProjectFormSubmit}>Save</Button>
        {' '}
        <Button className='AppButton AppButton--Secondary'
                onClick={props.onProjectFormDismiss}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

const renderNewProjectButton = (props) => {
  return (
    <Button className='AppButton AppButton--Primary'  
            onClick={props.onCreateProject}>
      + Create a new project!
    </Button>
  )
}

const ProjectsScreenView = (props) => {
  return (
    <div>
      <Jumbotron className="ProjectsListContainer">

        <div>
          <h1>
            Projects
          </h1>

          {renderNewProjectButton(props)}
        </div>

        <hr/>

        <ProjectsList projects={props.projects}
                      onViewProject={(pId) => props.onShowProject(pId)}
                      onEditProject={(pId) => props.onEditProject(pId)}
                      onDeleteProject={(pId) => props.onDeleteProject(pId)} />

        <hr/>
        
        <div>
          {renderNewProjectButton(props)}
        </div>

      </Jumbotron>
      {renderModal(props)}
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
  onProjectFormSubmit: PropTypes.func.isRequired,
  onProjectFormDismiss: PropTypes.func.isRequired
}

export default ProjectsScreenView