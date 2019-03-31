import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import AuthReducer from './store/reducers/auth'

import App from './App';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AuthReducer, composeEnhancers())

const routing = (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" exact component={App} />
            <Route path="/signin/" component={Signin} />
            <Route path="/signup/" component={Signup} />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(routing,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
