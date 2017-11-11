import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/index';
import website_menu from './store/website_menu';
import advertisement from './store/advertisement';
import article from './store/article';
import article_category from './store/article_category';
import page from './store/page';
import teacher from './store/teacher';
import student from './store/student';
import train from './store/train';
import primary from './store/primary';
import junior from './store/junior';
import international from './store/international';

import Index from './view/Index';
import Page from './view/Page';
import ArticleIndex from './view/article/Index';
import ArticleDetail from './view/article/Detail';
import StudentIndex from './view/student/Index';
import StudentDetail from './view/student/Detail';
import StudentLogin from './view/student/Login';
import StudentAdmissions from './view/student/Admissions';
import TeacherIndex from './view/teacher/Index';
import TeacherDetail from './view/teacher/Detail';
import TeacherLogin from './view/teacher/Login';
import TeacherRecruitment from './view/teacher/Recruitment';
import NotFound from './view/NotFound';
import Train from './view/teacher/Train';
import PrimaryIndex from './view/primary/Index';
import PrimarySignup from './view/primary/Signup';
import PrimaryCheck from './view/primary/Check';
import JuniorInde from './view/junior/Index';
import JuniorSignup from './view/junior/Signup';
import JuniorCheck from './view/junior/Check';
import InternationalIndex from './view/international/Index';

const store = createStore(
    combineReducers({
        index,
        website_menu,
        advertisement,
        article,
        article_category,
        page,
        teacher,
        student,
        train,
        primary,
        junior,
        international,
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
                <Route path="/article/index/:article_category_id" component={ArticleIndex}/>
                <Route path="/article/detail/:article_id" component={ArticleDetail}/>
                <Route path="/student/index/:student_category_id" component={StudentIndex}/>
                <Route path="/student/detail/:student_id" component={StudentDetail}/>
                <Route path="/student/login" component={StudentLogin}/>
                <Route path="/student/admissions" component={StudentAdmissions}/>
                <Route path="/teacher/index/:teacher_category_id" component={TeacherIndex}/>
                <Route path="/teacher/detail/:teacher_id" component={TeacherDetail}/>
                <Route path="/teacher/login" component={TeacherLogin}/>
                <Route path="/teacher/recruitment" component={TeacherRecruitment}/>
                <Route path="/not/found" component={NotFound}/>
                <Route path="/train/:page_id" component={Train}/>
                <Route path="/primary/index" component={PrimaryIndex}/>
                <Route path="/primary/signup" component={PrimarySignup}/>
                <Route path="/primary/check" component={PrimaryCheck}/>
                <Route path="/junior/index" component={JuniorInde}/>
                <Route path="/junior/signup" component={JuniorSignup}/>
                <Route path="/junior/check" component={JuniorCheck}/>
                <Route path="/international/index" component={InternationalIndex}/>
            </Route>
        </Router>
    </Provider>

export default Routers;
