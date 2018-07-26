import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);
const RootContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    RootContainer
);
registerServiceWorker();
