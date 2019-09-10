import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import auth from './store/reducers/auth'



import './index.css';

import * as serviceWorker from './serviceWorker';
import { authSuccess } from './store/actions/auth';


const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth,
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

store.dispatch(authSuccess(localStorage.getItem('token')))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
