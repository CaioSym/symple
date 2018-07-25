import PropTypes from 'prop-types';
import React from 'react';
import ProjectsListItem from './ProjectsListItem'

import './ProjectsList.css'

const renderProjectItems = props => {
  return props.projects
    .map(project => {
      return (
        <ProjectsListItem key={project.id}
                          onView={props.onViewProject}
                          onEdit={props.onEditProject}
                          onDelete={props.onDeleteProject}
                          {...project}/>
      )
  })
}

export default class ProjectsList extends React.Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    onViewProject: PropTypes.func,
    onEditProject: PropTypes.func,
    onDeleteProject: PropTypes.func
  };

  render() {
    return (
      <div className='ProjectsList__ItensContainer'>
        {renderProjectItems(this.props)}
      </div>
    );
  }
}
