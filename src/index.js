import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { fetchAllCars } from './actions';

const rootStore = createStore(reducers, applyMiddleware(thunk));
const RootContainer = document.getElementById('root');

rootStore.dispatch(fetchAllCars());

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    RootContainer
);
registerServiceWorker();
