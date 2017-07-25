import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  reducer  from './reducers/index.js';
import './index.css';

const store=createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>
    ,document.getElementById('root-app'));