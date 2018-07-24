import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router' // react-router v4

import ProjectsScreen from './containers/ProjectsScreen/ProjectsScreen'

const App = (props, _railsContext) => {
  return (
    <div className="App">
      <header>
      </header>

      <section className="main-content">
        <Switch>
         {
          // <Route exact path="/planting" render={() => <PlantingQueryForm/>} />
         }

          <Route render={() => <ProjectsScreen/>} />
        </Switch>
      </section>
      <footer>
        
      </footer>
    </div>
  )
}

export default App