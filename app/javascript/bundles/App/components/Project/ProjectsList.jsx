import PropTypes from 'prop-types';
import React from 'react';

class ProjectsListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
  };

  render() {
    return (
      <li>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
        <button onClick={this.props.onView.bind(this, this.props.id)}>View</button>
        <button onClick={this.props.onEdit.bind(this, this.props.id)}>Edit</button>
        <button onClick={this.props.onDelete.bind(this, this.props.id)}>Delete</button>
      </li>
    );
  }
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
      <div>
        <h2>
          Projects
        </h2>
        <ul>
          {
            this.props.projects
              .map(project => <ProjectsListItem key={project.id}
                                                onView={this.props.onViewProject}
                                                onEdit={this.props.onEditProject}
                                                onDelete={this.props.onDeleteProject}
                                                {...project}/>)
          }
        </ul>
      </div>
    );
  }
}
