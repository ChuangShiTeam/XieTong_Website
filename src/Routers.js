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
import team from './store/team';
import student from './store/student';
import train from './store/train';

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
import SignUpJunior from './view/signup/Junior';
import SignUpPupil from './view/signup/Pupil';
import SignUpPupilCheck from './view/signup/PupilCheck';
import SignUpJuniorCheck from './view/signup/JuniorCheck';
import Train from './view/teacher/Train';

const store = createStore(
    combineReducers({
        index,
        website_menu,
        advertisement,
        article,
        article_category,
        page,
        team,
        student,
        train,
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
                <Route path="/sign/junior" component={SignUpJunior}/>
                <Route path="/sign/pupil" component={SignUpPupil}/>
                <Route path="/sign/pupilcheck" component={SignUpPupilCheck}/>
                <Route path="/sign/juniorcheck" component={SignUpJuniorCheck}/>
                <Route path="/train/:page_id" component={Train}/>
            </Route>
        </Router>
    </Provider>

export default Routers;
