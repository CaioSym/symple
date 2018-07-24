import PropTypes from 'prop-types';
import React from 'react';
import ProjectsList from './components/Project/ProjectsList'

export default class App extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>
          AAA!
        </h2>
        <hr/>
        <form onSubmit={}>
          <label htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={(e) => this.updateTitle(e.target.value)}/>

          <label htmlFor="description">
            Description:
          </label>
          <input
            id="description"
            type="text"
            value={this.state.description}
            onChange={(e) => this.updateDescription(e.target.value)}/>

          <input
            id="name"
            type="submit"
            value="Submit"/>
        </form>
      </div>
    );
  }
}
