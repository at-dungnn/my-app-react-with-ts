import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, applyMiddleware, compose, DeepPartial} from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { IStoreState } from './types';
import * as reducers from './reducers';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as middlewares from './middlewares';
import {applicationInit} from './actions/App.action';
interface IWindowReduxDevTool extends Window {
    __REDUX_DEVTOOLS_EXTENSION__(): DeepPartial<any>;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }

declare var window: IWindowReduxDevTool;

const rootElement = document.getElementById('root')

const createReducers = combineReducers<IStoreState>(reducers);

const midws = Object.keys(middlewares).map(key => middlewares[key]);

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})) ||
  compose;

const store = createStore<IStoreState, any, any, any>(createReducers, composeEnhancers(applyMiddleware(...midws)));

store.dispatch(applicationInit());
ReactDOM.render(
    <Provider store={store}>
        <Hello languageName='DungNN'/>
    </Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
