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
            teacher_category_id: '',
            page_id: ''
        }
    }

    componentDidMount() {
        this.setState({
            teacher_category_id: this.props.params.teacher_category_id
        }, function () {
            this.handleLoad();
        }.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.teacher_category_id !== nextProps.params.teacher_category_id) {
            this.setState({
                teacher_category_id: nextProps.params.teacher_category_id
            }, function () {
                this.handleLoad();
            }.bind(this));
        }
    }

    componentWillUnmount() {

    }

    handleLoad() {
        var page_id = '';
        if (this.state.teacher_category_id === '70699f5ca3df49bfb4c742827e1a060c') {
            page_id = 'bda8c7a0c4584abf8e41d60685af5c57';
        } else if (this.state.teacher_category_id === '75b1b7bca5214bad9c79a9927659f8cb') {
            page_id = 'cac641d6533e413a820ed8b019b3b100';
        } else if (this.state.teacher_category_id === '54a612b9e5454814adb72ee1417d3e57') {
            page_id = 'e253866195a64d059d9f66100f11680f';
        } else if (this.state.teacher_category_id === 'df17d19a032b41c78dc159ba548c8dcb') {
            page_id = '0bc1615e1b824359ae1120fca932f60e';
        } else if (this.state.teacher_category_id === '5a3e3e701efe486383eaa54dbbe80467') {
            page_id = 'a3c0f17fa1bd4847be48cd00295d5551';
        }
        this.setState({
            page_id: page_id
        });

        if (this.props.team.list.length === 0) {
            http.request({
                url: '/desktop/xietong/teacher/list',
                data: {},
                success: function (data) {
                    this.props.dispatch({
                        type: 'team',
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
                <Header history={this.props.history} website_menu_id="80d321d42ae945a4951f83568452c284"/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb">
                            <a href="/index.html">首页</a> > <Link to=""></Link> >
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <PageSubNav website_menu_id="80d321d42ae945a4951f83568452c284"
                                        page_id={this.state.page_id}/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            {
                                this.props.team.list.map(function (team) {
                                    return (
                                        team.teacher_category_id === this.state.teacher_category_id ?
                                            this.state.teacher_category_id === '70699f5ca3df49bfb4c742827e1a060c' ?
                                                <div key={team.teacher_id} className="teacher-image">
                                                    <div className="team-item margin-top-20">
                                                        <div className="col-md-4 team-image">
                                                            <div className="team-image-item">
                                                                <img className="img-circle"
                                                                     src={constant.image_host + team.file_path} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 col-no-padding-left">
                                                            <div className="team-name">{team.teacher_name}</div>
                                                            <div className="team-description"
                                                                 dangerouslySetInnerHTML={{__html: team.teacher_description}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div key={team.teacher_id} className="col-md-4">
                                                    <Link to={"/teacher/detail/" + team.teacher_id}
                                                          className="teacher-image thumbnail">
                                                        <img src={constant.image_host + team.file_path} alt=""/>
                                                        <div>
                                                            <div className="teacher-name">{team.teacher_name}</div>
                                                            <div>{team.teacher_title}</div>
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
        team: state.team
    }
})(Team);
