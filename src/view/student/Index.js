import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import PageSubNav from '../../component/PageSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import constant from '../../util/constant';
import http from '../../util/http';

class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student_category_id: '',
            page_id: ''
        }
    }

    componentDidMount() {
        this.setState({
            student_category_id: this.props.params.student_category_id
        }, function () {
            this.handleLoad();
        }.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.student_category_id !== nextProps.params.student_category_id) {
            this.setState({
                student_category_id: nextProps.params.student_category_id
            }, function () {
                this.handleLoad();
            }.bind(this));
        }
    }

    componentWillUnmount() {

    }

    handleLoad() {
        var page_id = '';
        if (this.state.student_category_id === '0bce6c38d8d3463bb62a3270251a126d') {
            page_id = '371b4d2376c54dea975f832fa95b96b7';
        } else if (this.state.student_category_id === '1d49d03576954b3c998608b8f43be324') {
            page_id = '0d2baae867af4745a6c768a75a907d75';
        }
        this.setState({
            page_id: page_id
        });

        if (this.props.student.list.length === 0) {
            http.request({
                url: '/desktop/xietong/student/list',
                data: {},
                success: function (data) {
                    this.props.dispatch({
                        type: 'student',
                        data: {
                            list: data
                        }
                    });
                }.bind(this),
                error: function (data) {

                },
                complete: function () {

                }
            });
        }
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} website_menu_id="a34121161c2743f1b77feb64f65b80bf"/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb">
                            <a href="/index.html">首页</a> > <Link to=""></Link> >
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <PageSubNav website_menu_id="a34121161c2743f1b77feb64f65b80bf"
                                        page_id={this.state.page_id}/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            {
                                this.props.student.list.map(function (student) {
                                    return (
                                        student.student_category_id === this.state.student_category_id ?
                                            <div key={student.student_id} className="col-md-4">
                                                <Link to={"/student/detail/" + student.student_id}
                                                      className="teacher-image thumbnail">
                                                    <img src={constant.image_host + student.file_path} alt=""/>
                                                    <div>
                                                        <div className="teacher-name">{student.student_name}</div>
                                                        <div className="text-center">{student.clazz_name}</div>
                                                    </div>
                                                </Link>
                                            </div>
                                            :
                                            ''
                                    )
                                }.bind(this))
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        student: state.student
    }
})(Team);
