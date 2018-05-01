import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './ducks/reducers'
import './index.css';
import App from './App';

const Store = applyMiddleware(thunk)(createStore)
const rootReducer = combineReducers(reducers)

ReactDOM.render(
  <Provider store={ Store(rootReducer)} >
  <App />
</Provider>, document.getElementById('root'));
