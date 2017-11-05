import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/Index'

import Index from './view/Index';
import Page from './view/Page';
import ArticleIndex from './view/article/Index';
import ArticleDetail from './view/article/Detail';
import NotFound from './view/NotFound';

const store = createStore(
    combineReducers({
        index,
        routing: routerReducer
    })
);

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Index}/>
            <Route path="/index" component={Index}/>
            <Route path="/page/:page_id" component={Page}/>
            <Route path="/article/index" component={ArticleIndex}/>
            <Route path="/article/detail/:article_id" component={ArticleDetail}/>
            <Route path="/not/found" component={NotFound}/>
        </Router>
    </Provider>

export default Routers;
