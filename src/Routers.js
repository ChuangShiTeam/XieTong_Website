import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import Index from './view/Index';
import App from './App';
import Test from './Test';
import product from './store/Product'

const store = createStore(
    combineReducers({
        product,
        routing: routerReducer
    })
);

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Index}/>
            <Route path="/app" component={App}/>
            <Route path="/test" component={Test}/>
        </Router>
    </Provider>

export default Routers;
