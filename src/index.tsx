import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { StoreState } from './types';
import { enthusiasm } from './reducers';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction } from './actions';


const rootElement = document.getElementById('root')

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm);

ReactDOM.render(
    <Provider store={store}>
        <Hello languageName='DungNN'/>
    </Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
