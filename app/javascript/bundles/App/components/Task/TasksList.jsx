import PropTypes from 'prop-types';
import React from 'react';
import TasksListItem from './TasksListItem'

import './TasksList.css'

const renderTaskItems = props => {
  return props.tasks
    .map(task => {
      return (
        <TasksListItem key={task.id}
                          onView={props.onViewTask}
                          onEdit={props.onEditTask}
                          onDelete={props.onDeleteTask}
                          {...task}/>
      )
  })
}

export default class TasksList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onViewTask: PropTypes.func,
    onEditTask: PropTypes.func,
    onDeleteTask: PropTypes.func
  };

  render() {
    return (
      <div className='TasksList__ItensContainer'>
        {renderTaskItems(this.props)}
      </div>
    );
  }
}
