import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router' // react-router v4

import './App.css'
import ProjectsScreen from './containers/ProjectsScreen/ProjectsScreen'
import TasksScreen from './containers/TasksScreen/TasksScreen'
import NavBar from './containers/NavBar/NavBar'

const renderTasksScreen = ({ match }) => {
  return (<TasksScreen projectId={parseInt(match.params.projectId)}/>)
}

const App = (props, _railsContext) => {
  return (
    <div className="AppContainer">
      <header>
        <NavBar/>
      </header>

      <section className="main-content">
        <Switch>
          <Route path="/project/:projectId" render={renderTasksScreen}/>
          <Route render={() => <ProjectsScreen/>} />
        </Switch>
      </section>
      <footer>
        
      </footer>
    </div>
  )
}

export default App