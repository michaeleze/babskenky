import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import combineReducers from './store_reducer/index';
import {createStore} from 'redux';
// Insert this import line in your code:
import './_include/bootstrap';
import registerServiceWorker from './registerServiceWorker';
import {initialState} from './state'

const store = createStore(combineReducers,initialState)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>, document.getElementById('root')
            );
registerServiceWorker();
