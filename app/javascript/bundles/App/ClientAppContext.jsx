import PropTypes from 'prop-types';
import React, {Component} from 'react';

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import { createBrowserHistory } from 'history'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { withRouter } from 'react-router' // react-router v4

import App from './App'
import rootReducer from './reducers/rootReducer'

const history = createBrowserHistory()

const initStore = initialState => {
  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
        logger,
        // ... other middlewares ...
      ),
    ),
  )
  return store
} 

class ScrollToTopBehaviour extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollToTop = withRouter(ScrollToTopBehaviour)

const AppContext = (props, _railsContext) => {
  let store = initStore(props)
  return (
    <Provider store={store}>
       <ConnectedRouter history={history}>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  )
}

export default AppContext