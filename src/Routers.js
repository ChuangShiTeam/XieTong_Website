import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/Index';
import website_menu from './store/website_menu';
import advertisement from './store/advertisement';
import article from './store/article';
import article_category from './store/article_category';
import page from './store/page';

import Index from './view/Index';
import Page from './view/Page';
import Team from './view/Team';
import ArticleIndex from './view/article/Index';
import ArticleDetail from './view/article/Detail';
import StudentLogin from './view/student/Login';
import StudentAdmissions from './view/student/Admissions';
import TeacherLogin from './view/teacher/Login';
import TeacherRecruitment from './view/teacher/Recruitment';
import NotFound from './view/NotFound';
import SignUpJunior from './view/signup/Junior';
import SignUpPupil from './view/signup/Pupil';

const store = createStore(
    combineReducers({
        index,
        website_menu,
        advertisement,
        article,
        article_category,
        page,
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
                <Route path="/team" component={Team}/>
                <Route path="/article/index/:article_category_id" component={ArticleIndex}/>
                <Route path="/article/detail/:article_id" component={ArticleDetail}/>
                <Route path="/student/login" component={StudentLogin}/>
                <Route path="/student/admissions" component={StudentAdmissions}/>
                <Route path="/teacher/login" component={TeacherLogin}/>
                <Route path="/teacher/recruitment" component={TeacherRecruitment}/>
                <Route path="/not/found" component={NotFound}/>
                <Route path="/sign/junior" component={SignUpJunior}/>
                <Route path="/sign/pupil" component={SignUpPupil}/>
            </Route>
        </Router>
    </Provider>

export default Routers;
