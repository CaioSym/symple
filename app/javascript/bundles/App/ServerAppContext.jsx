import PropTypes from 'prop-types';
import React, {Component} from 'react';

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import { createMemoryHistory } from 'history'
import { StaticRouter } from 'react-router' // react-router v4

import App from './App'
import rootReducer from './reducers/rootReducer'

const initStore = initialState => {
  const store = createStore(
    rootReducer, // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        thunk,
        logger,
        // ... other middlewares ...
      ),
    ),
  )
  return store
} 

const AppContext = (props, _railsContext) => {
  return (
    <Provider store={initStore(props)}>
       <StaticRouter location={_railsContext.location}
                     context={{}}>
          <App/>
        </StaticRouter>
    </Provider>
  )
}

export default AppContext