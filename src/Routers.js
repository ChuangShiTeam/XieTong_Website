import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/index';
import menu from './store/menu';
import article from './store/article';

import Index from './view/Index';
import Page from './view/Page';
import ArticleIndex from './view/article/Index';
import ArticleDetail from './view/article/Detail';
import NotFound from './view/NotFound';

const store = createStore(
    combineReducers({
        index,
        menu,
        article,
        routing: routerReducer
    })
);

const handleEnter = function (next, replace, callback) {
    callback();
};

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" onEnter={handleEnter}>
                <IndexRedirect to="/index"/>
                <Route path="/index" component={Index}/>
                <Route path="/page/:page_id" component={Page}/>
                <Route path="/article/index" component={ArticleIndex}/>
                <Route path="/article/detail/:article_id" component={ArticleDetail}/>
                <Route path="/not/found" component={NotFound}/>
            </Route>
        </Router>
    </Provider>

export default Routers;
