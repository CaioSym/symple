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

const renderTaskList = (props, priority) => {
  return (
    <div key={priority} className="TasksScreen__TracksItem">
      <h4>Priority #{priority}</h4>
      <Button className='AppButton AppButton--Primary'  
              onClick={() => props.onCreateTask(props.projectId, priority)}>
        + Create a new task!
      </Button>
      <hr/>
      <TasksList tasks={props.tasks.filter(t => t.priority === priority)}
                 onViewTask={(taskId) => props.onShowTask(props.projectId, taskId)}
                 onEditTask={(taskId) => props.onEditTask(props.projectId, taskId)}
                 onDeleteTask={(taskId) => props.onDeleteTask(props.projectId, taskId)} />
    </div>
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
          { [1,2,3,4,5].map(n => renderTaskList(props, n)) }
        </div>

        <hr/>
      </Jumbotron>
      {/*renderModal(props)*/}
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
  onTaskFormEditDescription: PropTypes.func.isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
  onTaskFormDismiss: PropTypes.func.isRequired
}

export default TasksScreenView