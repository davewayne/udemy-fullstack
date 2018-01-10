import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';
import reduxThink from 'redux-thunk';
const store = createStore(reducers, {}, applyMiddleware(reduxThink));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));

console.log('key is:', process.env.REACT_APP_STRIPE_KEY);
console.log('key is:', process.env.NODE_ENV);

registerServiceWorker();
