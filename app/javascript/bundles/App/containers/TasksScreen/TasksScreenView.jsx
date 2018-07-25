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

import './TasksScreenView.css'
import TasksList from '../../components/Task/TasksList'

const renderTasksList = (props, title, tasks) => {
  return (
    <div key={title} className="TasksScreen__TracksItem">
      <h4>{title}</h4>
      <Button className='AppButton AppButton--Primary'  
              onClick={() => props.onCreateTask(props.projectId, priority)}>
        + Create a new task!
      </Button>
      <hr/>
      <TasksList tasks={tasks}
                 onViewTask={(taskId) => props.onShowTask(props.projectId, taskId)}
                 onEditTask={(taskId) => props.onEditTask(props.projectId, taskId)}
                 onDeleteTask={(taskId) => props.onDeleteTask(props.projectId, taskId)} />
    </div>
  )
} 

const renderModal = (props) => {
  if (!props.form) { return null; }

  return (
    <Modal isOpen={props.form != null}
           toggle={props.onTaskFormDismiss}>
      <ModalHeader toggle={props.onTaskFormDismiss}>
        {props.form.title}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
            <Input
              type="text"
              placeholder="Title"
              value={props.form.params.title || ""}
              onChange={(e) => props.onTaskFormEditTite(e.target.value)}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Priority</InputGroupAddon>
            <Input type="select"
                   placeholder="Priority"
                   value={props.form.params.priority || 1}
                   onChange={(e) => props.onTaskFormEditPriority(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Input>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="completed">Completed</Label>          
          <Input name='completed'
                 type="checkbox"
                 value={props.form.params.completed || 1}
                 onChange={(e) => props.onTaskFormEditCompleted(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
            <Input
              type="textarea"
              placeholder="Description"
              value={props.form.params.description || ""}
              onChange={(e) => props.onTaskFormEditDescription(e.target.value)}/>            
          </InputGroup>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button className='AppButton AppButton--Primary'
                onClick={() => props.onTaskFormSubmit(props.projectId)}>Save</Button>
        {' '}
        <Button className='AppButton AppButton--Secondary'
                onClick={props.onTaskFormDismiss}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}


const TasksScreenView = (props) => {
  console.log(props.tasks)
  return (
    <div>
      <Jumbotron className="TasksScreenContainer">

        <div>
          <h1>
            {props.projectTitle}
          </h1>
        </div>

        <hr/>

        <div className="TasksScreen__TracksContainer">
          { 
            [1,2,3,4,5]
              .map(n => renderTasksList(props, `Priority #${n}`, props.tasks.filter(t => t.priority === n && !t.completed)))
          }
          { renderTasksList(props, 'Completed', props.tasks.filter(t => t.completed)) }
        </div>

        <hr/>
      </Jumbotron>
      {renderModal(props)}
    </div>
  );
}

TasksScreenView.propTypes = {
  projectId: PropTypes.number.isRequired,
  projectTitle: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  form: PropTypes.object,

  onShowTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCreateTask: PropTypes.func.isRequired,
  onTaskFormEditTite: PropTypes.func.isRequired,
  onTaskFormEditPriority: PropTypes.func.isRequired,
  onTaskFormEditCompleted: PropTypes.func.isRequired,
  onTaskFormEditDescription: PropTypes.func.isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
  onTaskFormDismiss: PropTypes.func.isRequired
}

export default TasksScreenView