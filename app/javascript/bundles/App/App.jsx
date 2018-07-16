import PropTypes from 'prop-types';
import React from 'react';
import ProjectsList from './components/Project/ProjectsList'
import {createProject, fetchTasks} from './services/ProjectsService'

export default class App extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  componentDidMount() {
    // fetchProjects()
    //   .then(json => {console.log(json); return json;})
    //   .then(projects => fetchTasks(projects[0].id))
    //   .then(json => console.log(json))
    //   .catch(error => console.log(error));
  }

  updateName = (name) => {
    this.setState({ name });
  };

  showProjects = (projectId) => {
    console.log(projectId)
    fetchTasks(projectId)
      .then(x => console.log(x))
  };

  createNewProject = () => {
    createProject({title: "Lol", description: "HUEUEHUE"})
      .then(x => console.log(x))
  };  

  render() {
    return (
      <div>
        <h2>
          Hello, {this.state.name}!
        </h2>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>

        <ProjectsList projects={this.props.projects}
                      onViewProject={(pId) => this.showProjects(pId)}
                      onEditProject={(pId) => this.showProjects(pId)}
                      onDeleteProject={(pId) => this.showProjects(pId)} />

        <button onClick={this.createNewProject}>
          + Create a new project!
        </button>
      </div>
    );
  }
}
